let called = 0;
const hash = (string) => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

const HashTable = function () {
  this.collection = {};

  this.add = function (key, value) {
    const hashedKey = hash(key);
    this.collection[hashedKey] = this.collection[hashedKey] || {};
    this.collection[hashedKey][key] = value;
  };

  this.remove = function (key) {
    const hashedKey = hash(key);
    delete this.collection[hashedKey][key];
    if (Object.keys(this.collection[hashedKey]).length == 0)
      delete this.collection[hashedKey];
  };

  this.lookup = function (key) {
    const hashedKey = hash(key);
    return this.collection[hashedKey][key];
  };
};

const hashTable = new HashTable();

hashTable.add("Uno", "Primero");
hashTable.add("ddj", "Segundo");
hashTable.add("Dos", "Tercero");
console.log(hashTable);

console.log(hashTable.lookup("ddj"));
hashTable.remove("ddj");
console.log(hashTable);
