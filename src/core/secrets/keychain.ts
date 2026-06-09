import { invoke } from '@tauri-apps/api/core';

export interface SecretStore {
  saveToken(tokenRef: string, token: string): Promise<void>;
  readToken(tokenRef: string): Promise<string | null>;
  deleteToken(tokenRef: string): Promise<void>;
}

function ensureTauriRuntime(): void {
  if (typeof window === 'undefined' || !('__TAURI_INTERNALS__' in window)) {
    throw new Error('macOS Keychain access is only available inside the Tauri desktop runtime.');
  }
}

export class MacKeychainSecretStore implements SecretStore {
  async saveToken(tokenRef: string, token: string): Promise<void> {
    ensureTauriRuntime();
    await invoke('save_token', { tokenRef, token });
  }

  async readToken(tokenRef: string): Promise<string | null> {
    ensureTauriRuntime();
    return invoke<string | null>('read_token', { tokenRef });
  }

  async deleteToken(tokenRef: string): Promise<void> {
    ensureTauriRuntime();
    await invoke('delete_token', { tokenRef });
  }
}
