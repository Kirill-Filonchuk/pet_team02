export class StorageService {
  constructor(key) {
    this.key = key;
  }

  getStorageValue() {
    const result = localStorage.getItem(this.key);
    return result ? JSON.parse(result) : false;
  }

  setStorageValue = value => {
    localStorage.setItem(this.key, JSON.stringify(value));
  };
}
