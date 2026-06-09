export interface LocalCacheStore<T extends { id: string }> {
  put(records: T[]): Promise<void>;
  list(): Promise<T[]>;
  clear(): Promise<void>;
}

export class BrowserMemoryStore<T extends { id: string }> implements LocalCacheStore<T> {
  private records = new Map<string, T>();

  async put(records: T[]): Promise<void> {
    records.forEach((record) => this.records.set(record.id, record));
  }

  async list(): Promise<T[]> {
    return Array.from(this.records.values());
  }

  async clear(): Promise<void> {
    this.records.clear();
  }
}
