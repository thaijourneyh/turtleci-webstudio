import { invoke } from '@tauri-apps/api/core';
import type { SecretStore } from '../../secrets/keychain';
import type {
  FieldKind,
  WebflowCollection,
  WebflowCollectionField,
  WebflowConnection,
  WebflowEntry,
  WebflowEntryField,
} from '../../domain/webflow';

const WEBFLOW_API_BASE = 'https://api.webflow.com/v2';

type WebflowCollectionResponse = {
  collections?: Array<{
    id: string;
    displayName: string;
    slug: string;
  }>;
};

type WebflowCollectionDetailsResponse = {
  id: string;
  displayName: string;
  slug: string;
  fields?: Array<{
    id: string;
    slug: string;
    displayName: string;
    type: string;
    isRequired?: boolean;
    isEditable?: boolean;
    helpText?: string;
  }>;
};

type WebflowItemsResponse = {
  items?: Array<{
    id: string;
    lastPublished?: string | null;
    lastUpdated?: string;
    fieldData: Record<string, unknown>;
    isDraft?: boolean;
    isArchived?: boolean;
  }>;
};

type WebflowUpdateResponse = {
  items?: Array<{
    id: string;
    lastPublished?: string | null;
    lastUpdated?: string;
    fieldData: Record<string, unknown>;
    isDraft?: boolean;
    isArchived?: boolean;
  }>;
};

export interface WebflowProvider {
  validateConnection(connection: WebflowConnection): Promise<boolean>;
  fetchCollections(connection: WebflowConnection): Promise<WebflowCollection[]>;
  fetchCollectionDetails(connection: WebflowConnection, collectionId: string): Promise<WebflowCollection>;
  fetchEntries(connection: WebflowConnection, collectionId: string): Promise<WebflowEntry[]>;
  updateEntry(connection: WebflowConnection, entry: WebflowEntry): Promise<WebflowEntry>;
  publishEntry(connection: WebflowConnection, entryId: string, collectionId: string): Promise<void>;
}

export class WebflowApiClient implements WebflowProvider {
  constructor(private readonly secretStore: SecretStore) {}

  async validateConnection(connection: WebflowConnection): Promise<boolean> {
    const response = await this.request<WebflowCollectionResponse>(connection, `/sites/${connection.siteId}/collections`);
    return Array.isArray(response.collections);
  }

  async fetchCollections(connection: WebflowConnection): Promise<WebflowCollection[]> {
    const response = await this.request<WebflowCollectionResponse>(connection, `/sites/${connection.siteId}/collections`);
    return (response.collections ?? []).map((collection) => ({
      id: collection.id,
      connectionId: connection.id,
      name: collection.displayName,
      slug: collection.slug,
      fields: 0,
      entries: 0,
    }));
  }

  async fetchCollectionDetails(connection: WebflowConnection, collectionId: string): Promise<WebflowCollection> {
    const response = await this.request<WebflowCollectionDetailsResponse>(connection, `/collections/${collectionId}`);
    return {
      id: response.id,
      connectionId: connection.id,
      name: response.displayName,
      slug: response.slug,
      fields: response.fields?.length ?? 0,
      entries: 0,
      schema: (response.fields ?? []).map((field) => ({
        id: field.id,
        slug: field.slug,
        label: field.displayName,
        type: field.type,
        isRequired: Boolean(field.isRequired),
        isEditable: field.isEditable !== false,
        helpText: field.helpText,
      })),
    };
  }

  async fetchEntries(connection: WebflowConnection, collectionId: string): Promise<WebflowEntry[]> {
    const response = await this.request<WebflowItemsResponse>(connection, `/collections/${collectionId}/items`);
    const collection = await this.fetchCollectionDetails(connection, collectionId);
    return (response.items ?? []).map((item) => mapItem(connection.id, collectionId, item, collection.schema ?? []));
  }

  async updateEntry(connection: WebflowConnection, entry: WebflowEntry): Promise<WebflowEntry> {
    const response = await this.request<WebflowUpdateResponse>(connection, `/collections/${entry.collectionId}/items`, {
      method: 'PATCH',
      body: JSON.stringify({
        items: [
          {
            id: entry.id,
            isArchived: false,
            isDraft: true,
            fieldData: serializeFieldData(entry.fields),
          },
        ],
      }),
    });

    const updated = response.items?.[0];
    if (!updated) {
      throw new Error('Webflow did not return the updated item.');
    }

    return mapItem(
      connection.id,
      entry.collectionId,
      updated,
      entry.fields.map((field) => ({
        id: field.id,
        slug: field.slug,
        label: field.label,
        type: schemaTypeFromKind(field.kind),
        isRequired: Boolean(field.isRequired),
        isEditable: field.isEditable !== false,
        helpText: field.helpText,
      })),
    );
  }

  async publishEntry(connection: WebflowConnection, entryId: string, collectionId: string): Promise<void> {
    await this.request(connection, `/collections/${collectionId}/items/publish`, {
      method: 'POST',
      body: JSON.stringify({ itemIds: [entryId] }),
    });
  }

  private async request<T>(connection: WebflowConnection, path: string, init: RequestInit = {}): Promise<T> {
    if (isTauriRuntime()) {
      try {
        return await invoke<T>('webflow_request', {
          payload: {
            tokenRef: connection.tokenRef,
            path,
            method: init.method ?? 'GET',
            body: init.body ? JSON.parse(String(init.body)) : null,
          },
        });
      } catch (error) {
        throw new Error(parseTauriWebflowError(error, connection.siteId));
      }
    }

    const token = await this.secretStore.readToken(connection.tokenRef);
    if (!token) {
      throw new Error(`No Webflow token found in Keychain for ${connection.name}.`);
    }

    try {
      const response = await fetch(`${WEBFLOW_API_BASE}${path}`, {
        ...init,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          ...(init.headers ?? {}),
        },
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(formatWebflowError(response.status, message, connection.siteId));
      }

      if (response.status === 204) {
        return {} as T;
      }

      return (await response.json()) as T;
    } catch (error) {
      if (error instanceof Error && error.message !== 'Failed to fetch' && error.message !== 'Load failed') {
        throw error;
      }

      throw new Error(
        'The desktop app could not reach Webflow from the webview. Try again after relaunching the app so requests use the native Tauri bridge.',
      );
    }
  }
}

export function formatWebflowError(status: number, message: string, siteId: string): string {
  const parsedMessage = extractWebflowMessage(message);

  if (status === 401) {
    return 'Webflow rejected the token. Generate a fresh token and make sure it has CMS read and write access.';
  }

  if (status === 403) {
    return 'Webflow accepted the token but blocked this action. Check that the token has CMS read and write permission for this site.';
  }

  if (status === 404) {
    return `Webflow could not find site ${siteId}. Double-check the site ID and confirm the token belongs to the same workspace.`;
  }

  if (status === 429) {
    return 'Webflow rate-limited the request. Wait a moment and try again.';
  }

  return `Webflow request failed (${status}): ${parsedMessage}`;
}

function parseTauriWebflowError(error: unknown, siteId: string): string {
  const raw = String(error ?? '');
  const httpMatch = raw.match(/WEBFLOW_HTTP_(\d{3})::([\s\S]*)$/);
  if (httpMatch) {
    return formatWebflowError(Number(httpMatch[1]), httpMatch[2], siteId);
  }

  if (raw.includes('No Webflow token found')) {
    return raw;
  }

  return raw || 'Webflow request failed.';
}

function isTauriRuntime(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}

function extractWebflowMessage(message: string): string {
  try {
    const parsed = JSON.parse(message) as { msg?: string; message?: string; code?: string; name?: string };
    return parsed.message ?? parsed.msg ?? parsed.code ?? parsed.name ?? message;
  } catch {
    return message;
  }
}

function serializeFieldData(fields: WebflowEntryField[]): Record<string, unknown> {
  return fields.reduce<Record<string, unknown>>((payload, field) => {
    payload[field.slug] = field.value;
    return payload;
  }, {});
}

function mapItem(
  connectionId: string,
  collectionId: string,
  item: {
    id: string;
    lastPublished?: string | null;
    lastUpdated?: string;
    fieldData: Record<string, unknown>;
    isDraft?: boolean;
  },
  schema: WebflowCollectionField[],
): WebflowEntry {
  const name = String(item.fieldData.name ?? item.fieldData.title ?? 'Untitled');
  const slug = String(item.fieldData.slug ?? item.id);
  const orderedFields = buildOrderedFields(item.fieldData, schema);

  return {
    id: item.id,
    connectionId,
    collectionId,
    name,
    slug,
    status: inferStatus(item.isDraft ?? false, item.lastPublished ?? null),
    updatedAt: item.lastUpdated ?? new Date().toISOString(),
    fields: orderedFields,
  };
}

export function inferStatus(isDraft: boolean, lastPublished: string | null): WebflowEntry['status'] {
  if (lastPublished && isDraft) {
    return 'changed';
  }
  if (lastPublished) {
    return 'published';
  }
  if (isDraft) {
    return 'draft';
  }
  return 'draft';
}

export function inferFieldKind(key: string, value: unknown): WebflowEntryField['kind'] {
  const normalizedKey = key.toLowerCase();

  if (typeof value === 'boolean') {
    return 'toggle';
  }
  if (normalizedKey === 'slug') {
    return 'slug';
  }
  if (Array.isArray(value) || (value !== null && typeof value === 'object')) {
    if (normalizedKey.includes('image') || normalizedKey.includes('asset') || normalizedKey.includes('photo')) {
      return 'image';
    }
    return 'reference';
  }
  if (normalizedKey.includes('body') || normalizedKey.includes('content') || normalizedKey.includes('post')) {
    return 'rich-text';
  }
  if (normalizedKey.includes('summary') || normalizedKey.includes('excerpt') || normalizedKey.includes('description')) {
    return 'long-text';
  }
  if (normalizedKey.includes('date') || normalizedKey.includes('published') || normalizedKey.includes('updated')) {
    return 'date';
  }
  if (normalizedKey.includes('image') || normalizedKey.includes('asset') || normalizedKey.includes('photo')) {
    return 'image';
  }
  if (normalizedKey.includes('author') || normalizedKey.includes('category') || normalizedKey.includes('reference')) {
    return 'reference';
  }
  return 'plain-text';
}

export function mapSchemaFieldKind(type: string): FieldKind {
  switch (type) {
    case 'RichText':
      return 'rich-text';
    case 'PlainText':
      return 'plain-text';
    case 'Switch':
      return 'toggle';
    case 'DateTime':
      return 'date';
    case 'Image':
      return 'image';
    case 'Reference':
    case 'MultiReference':
      return 'reference';
    case 'Number':
      return 'number';
    case 'Link':
      return 'link';
    case 'Email':
      return 'email';
    case 'Phone':
      return 'phone';
    case 'Option':
      return 'option';
    case 'File':
      return 'file';
    default:
      return 'plain-text';
  }
}

function schemaTypeFromKind(kind: FieldKind): string {
  switch (kind) {
    case 'rich-text':
      return 'RichText';
    case 'slug':
    case 'plain-text':
    case 'long-text':
      return 'PlainText';
    case 'toggle':
      return 'Switch';
    case 'date':
      return 'DateTime';
    case 'image':
      return 'Image';
    case 'reference':
      return 'Reference';
    case 'number':
      return 'Number';
    case 'link':
      return 'Link';
    case 'email':
      return 'Email';
    case 'phone':
      return 'Phone';
    case 'option':
      return 'Option';
    case 'file':
      return 'File';
    default:
      return 'PlainText';
  }
}

function buildOrderedFields(fieldData: Record<string, unknown>, schema: WebflowCollectionField[]): WebflowEntryField[] {
  if (!schema.length) {
    return Object.entries(fieldData).map(([key, value]) => ({
      id: key,
      slug: key,
      label: humanizeLabel(key),
      kind: inferFieldKind(key, value),
      value,
    }));
  }

  const seen = new Set<string>();
  const ordered = schema.map((field) => {
    seen.add(field.slug);
    return {
      id: field.id,
      slug: field.slug,
      label: field.label,
      kind: mapSchemaFieldKind(field.type),
      value: fieldData[field.slug] ?? null,
      isRequired: field.isRequired,
      isEditable: field.isEditable,
      helpText: field.helpText,
    };
  });

  const unknownFields = Object.entries(fieldData)
    .filter(([slug]) => !seen.has(slug))
    .map(([slug, value]) => ({
      id: slug,
      slug,
      label: humanizeLabel(slug),
      kind: inferFieldKind(slug, value),
      value,
    }));

  return [...ordered, ...unknownFields];
}

function humanizeLabel(value: string): string {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
