export type ConnectionStatus = 'connected' | 'attention' | 'offline';
export type EntryStatus = 'draft' | 'queued' | 'published' | 'changed';
export type FieldKind =
  | 'plain-text'
  | 'long-text'
  | 'rich-text'
  | 'slug'
  | 'date'
  | 'toggle'
  | 'image'
  | 'reference'
  | 'number'
  | 'link'
  | 'email'
  | 'phone'
  | 'option'
  | 'file';

export interface WebflowCollectionField {
  id: string;
  slug: string;
  label: string;
  type: string;
  isRequired: boolean;
  isEditable: boolean;
  helpText?: string;
}

export interface WebflowConnection {
  id: string;
  name: string;
  siteId: string;
  workspaceLabel: string;
  tokenRef: string;
  status: ConnectionStatus;
  lastSyncedAt: string;
  collections: number;
}

export interface WebflowCollection {
  id: string;
  connectionId: string;
  name: string;
  slug: string;
  fields: number;
  entries: number;
  schema?: WebflowCollectionField[];
}

export interface WebflowEntryField {
  id: string;
  slug: string;
  label: string;
  kind: FieldKind;
  value: unknown;
  isRequired?: boolean;
  isEditable?: boolean;
  helpText?: string;
}

export interface WebflowEntry {
  id: string;
  connectionId: string;
  collectionId: string;
  name: string;
  slug: string;
  status: EntryStatus;
  updatedAt: string;
  fields: WebflowEntryField[];
}

export interface PublishAction {
  canSaveDraft: boolean;
  canPublish: boolean;
  confirmationLabel: string;
}
