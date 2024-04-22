class HashTable {
  constructor() {
    this.hashTable = new Array();
  }

  hashWord(value, size) {
    let charSum = 0;
    for (let i = 0; i < value.length; i++) {
      charSum += value.charCodeAt(i);
    }
    return charSum % size;
  }

  hashData(arr) {
    for (let data of arr) {
      const hashIndex = this.hashWord(data.toString().toUpperCase(), arr.length);

      if (this.hashTable[hashIndex] !== undefined) {
        const item = this.hashTable[hashIndex];
        if (typeof(item) === "object") {
          this.hashTable[hashIndex] = [data, ...item];
        } else {
          this.hashTable[hashIndex] = [data, item];
        }
      } else {
        this.hashTable[hashIndex] = data;
      }
    }
  }

  lookUpData(value) {
    const hashIndex = this.hashWord(value.toUpperCase());
    const item = this.hashTable[hashIndex];

    if (typeof(item) === "object") return !item.includes(value) || value;
    else return item;
  }
}

// Example usage:
let names = ["Jane", "John", "Mark", "Mary", "Sam", "Kobe", "Kobe", '5', 'A', 'b', 8, 10];
names = new Set(names);
names = [...names];

const myHashTable = new HashTable();
myHashTable.hashData(names);
console.log(myHashTable.hashTable);
console.log(myHashTable.lookUpData("Kobe"));
