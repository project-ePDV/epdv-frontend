import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    localStorage.getItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
