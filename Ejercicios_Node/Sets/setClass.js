/*
Create an `add` method that adds a unique value to the set collection
and returns `true` if the value was successfully added and `false` otherwise.

Create a `remove` method that accepts a value and checks if it exists in the set.
If it does, then this method should remove it from the set collection, and return `true`.
Otherwise, it should return `false`.
Create a `size` method that returns the size of the set collection.
 */

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  add(value) {
    if (!this.has(value)) {
      this.dictionary[value] = value;
      this.length++;
      return true;
    }
    return false;
  }

  remove(value) {
    if (this.has(value)) {
      delete this.dictionary[value];
      this.length--;
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }

  union(set) {
    const newSet = new Set();
    this.values().forEach((value) => newSet.add(value));
    set.values().forEach((value) => newSet.add(value));
    return newSet;
  }

  intersection(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      if (set.values().includes(value)) newSet.add(value);
    });
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    this.values().forEach((value) => {
      if (!set.values().includes(value)) newSet.add(value);
    });
    return newSet;
  }
}

const set = new Set();
const setA = new Set();
const setB = new Set();

console.log(set.add(2));
console.log(set.add(3));
console.log(set.add(2));
console.log(set.size());
console.log(set.add(5));
console.log(set.size());
console.log(set.values());
console.log(set.remove(2));
console.log(set.size());
console.log(set.values());
console.log(set.remove(5));
console.log(set.remove(2));
console.log(set.values());
console.log(set.size());

setA.add("a");
setA.add("b");
setA.add("c");
console.log(setA.values());

setB.add("c");
setB.add("d");
console.log(setB.values());

console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values());
