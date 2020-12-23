import { PersistentStorage } from '../types';

export class SecureLSWrapper implements PersistentStorage {
  // Actual type definition: https://github.com/microsoft/TypeScript/blob/master/lib/lib.dom.d.ts#L15286
  private storage;

  constructor(storage: any) {
    this.storage = storage;
  }

  getItem(key: string): string | Promise<string | null> | null {
    return this.storage.get(key);
  }

  removeItem(key: string): void | Promise<void> {
    return this.storage.remove(key);
  }

  setItem(key: string, value: any): void | Promise<void> {
    return this.storage.set(key, value);
  }
}
