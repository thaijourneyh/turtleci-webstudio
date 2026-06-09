import type { SecretStore } from '../secrets/keychain';
import type { WebflowCollection, WebflowConnection } from '../domain/webflow';
import { WebflowApiClient, type WebflowProvider } from '../providers/webflow/client';

export interface ConnectionDraft {
  name: string;
  siteId: string;
  workspaceLabel: string;
  token: string;
}

export interface LiveConnectionResult {
  connection: WebflowConnection;
  collections: WebflowCollection[];
}

export class WebflowConnectionService {
  constructor(
    private readonly secretStore: SecretStore,
    private readonly provider: WebflowProvider = new WebflowApiClient(secretStore),
  ) {}

  async createAndValidateConnection(draft: ConnectionDraft): Promise<LiveConnectionResult> {
    if (!draft.name.trim() || !draft.workspaceLabel.trim() || !draft.siteId.trim() || !draft.token.trim()) {
      throw new Error('Add a site name, workspace label, site ID, and API token before validating the connection.');
    }

    const connectionId = slugify(draft.name || draft.siteId);
    const tokenRef = `keychain://webflow/${connectionId}`;

    await this.secretStore.saveToken(tokenRef, draft.token);

    const connection: WebflowConnection = {
      id: connectionId,
      name: draft.name,
      siteId: draft.siteId,
      workspaceLabel: draft.workspaceLabel,
      tokenRef,
      status: 'connected',
      lastSyncedAt: new Date().toISOString(),
      collections: 0,
    };

    try {
      const collections = await this.provider.fetchCollections(connection);
      return {
        connection: {
          ...connection,
          collections: collections.length,
        },
        collections,
      };
    } catch (error) {
      await this.secretStore.deleteToken(tokenRef);
      throw error;
    }
  }
}

function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'webflow-site';
}
