/* Define a circular object circular such that the following are true:

circular.value === "Hello World"
circular === circular.self
circular.self === circular.self.self */

class Circular {
  constructor() {
    this.value = "Hello World";
    this.self = this;
  }
}

const circular = new Circular();

console.log(circular.value);
console.log(circular === circular.self);
console.log(circular.self === circular.self.self);

const arr = [circular, circular.self, circular.self.self];
console.log(arr);

//
//
// Another solution:
let circular2 = { value: "Hello World" };
circular2.self = circular2;
