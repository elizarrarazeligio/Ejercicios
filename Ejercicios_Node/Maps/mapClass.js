/*
Create the following methods and operations on the Map object:

- `add` accepts a `key, value` pair to add to the map.
- `remove` accepts a key and removes the associated `key, value` pair
- `get` accepts a `key` and returns the stored `value`
- `has` accepts a `key` and returns **true** if the key exists or **false** if it doesn't
- `values` returns an array of all the values in the map
- `size` returns the number of items in the map
- `clear` empties the map
*/

const Map = function () {
  this.collection = {};

  this.add = function (key, value) {
    this.collection[key] = value;
    console.log(this.collection);
  };

  this.remove = function (key) {
    delete this.collection[key];
    console.log(this.collection);
  };

  this.get = function (key) {
    return this.collection[key];
  };

  this.has = function (key) {
    return Object.hasOwn(this.collection, key);
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.size = function () {
    return Object.entries(this.collection).length;
  };

  this.clear = function () {
    this.collection = {};
  };
};

const map = new Map();
map.add("one", "Soy el 1er valor");
map.add("two", "Soy el 2do valor");
map.add("three", "Soy el 3er valor");
console.log(map.get("one"));
map.remove("one");
console.log(map.has("two"));
console.log(map.values());
console.log(map.size());
map.clear();
console.log(map.collection);
