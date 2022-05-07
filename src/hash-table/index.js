class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let WEIRD_PRIME = 31;
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.#hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.#hash(key);

    return this.keyMap[index]?.find(([k, v]) => k === key);
  }

  keys() {
    let result = new Set();

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.add(this.keyMap[i][j][0]);
        }
      }
    }

    return [...result];
  }

  values() {
    let result = new Set();

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          result.add(this.keyMap[i][j][1]);
        }
      }
    }

    return [...result];
  }
}

export default HashTable;
