import { invoke } from '@tauri-apps/api/core';
import type { WebflowConnection } from '../domain/webflow';

const LOCAL_STORAGE_KEY = 'marketing-webflow-cleaner-connections';

export interface ConnectionStore {
  load(): Promise<WebflowConnection[]>;
  save(connections: WebflowConnection[]): Promise<void>;
}

export class PersistentConnectionStore implements ConnectionStore {
  async load(): Promise<WebflowConnection[]> {
    if (isTauriRuntime()) {
      return invoke<WebflowConnection[]>('load_connections');
    }

    if (typeof window === 'undefined') {
      return [];
    }

    const saved = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? (JSON.parse(saved) as WebflowConnection[]) : [];
  }

  async save(connections: WebflowConnection[]): Promise<void> {
    if (isTauriRuntime()) {
      await invoke('save_connections', { connections });
      return;
    }

    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(connections));
  }
}

function isTauriRuntime(): boolean {
  return typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
}
