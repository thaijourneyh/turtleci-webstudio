import type { WebflowCollection, WebflowConnection, WebflowEntry } from '../domain/webflow';
import type { LocalCacheStore } from '../storage/database';
import type { WebflowProvider } from '../providers/webflow/client';

export class WebflowSyncService {
  constructor(
    private readonly provider: WebflowProvider,
    private readonly collectionCache: LocalCacheStore<WebflowCollection>,
    private readonly entryCache: LocalCacheStore<WebflowEntry>,
  ) {}

  async syncCollections(connection: WebflowConnection): Promise<WebflowCollection[]> {
    const collections = await this.provider.fetchCollections(connection);
    await this.collectionCache.put(collections);
    return collections;
  }

  async syncCollectionDetails(connection: WebflowConnection, collectionId: string): Promise<WebflowCollection> {
    const collection = await this.provider.fetchCollectionDetails(connection, collectionId);
    await this.collectionCache.put([collection]);
    return collection;
  }

  async syncEntries(connection: WebflowConnection, collectionId: string): Promise<WebflowEntry[]> {
    const entries = await this.provider.fetchEntries(connection, collectionId);
    await this.entryCache.put(entries);
    return entries;
  }

  async saveEntry(connection: WebflowConnection, entry: WebflowEntry): Promise<WebflowEntry> {
    const updated = await this.provider.updateEntry(connection, entry);
    await this.entryCache.put([updated]);
    return updated;
  }

  async publishEntry(connection: WebflowConnection, entryId: string, collectionId: string): Promise<void> {
    await this.provider.publishEntry(connection, entryId, collectionId);
  }
}
