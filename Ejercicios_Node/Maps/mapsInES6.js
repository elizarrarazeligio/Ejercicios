const newMap = new Map();

newMap.set("key", "value");
newMap.set("key2", "value2");
console.log(newMap);

console.log(newMap.get("key"));
console.log(newMap.has("key2"));

const entriesIterator = newMap.entries();
console.log(entriesIterator.next().value);
console.log(entriesIterator.next().value);

const keysIterator = newMap.keys();
console.log(keysIterator.next().value);
console.log(keysIterator.next().value);

const valuesIterator = newMap.values();
console.log(valuesIterator.next().value);
console.log(valuesIterator.next().value);

newMap.delete("key");
console.log(newMap);

newMap.clear();
console.log(newMap);
