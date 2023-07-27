import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  has(key: string): boolean {
    return !!this.get(key);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
