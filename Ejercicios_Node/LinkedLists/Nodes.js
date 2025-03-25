/*  A linked list is a linear collection of data elements, called 'nodes', each of which points to the next.
Each node in a linked list contains two key pieces of information: the element itself, and a reference to the next node. */

const Node = function (element) {
  this.element = element;
  this.next = null;
};

const Kitten = new Node("Kitten");
const Puppy = new Node("Puppy");

Kitten.next = Puppy;

const Cat = new Node("Cat");
const Dog = new Node("Dog");

Puppy.next = Cat;
Cat.next = Dog;

console.log(Kitten.next);
console.log(Puppy.next);
console.log(Cat.next);
console.log(Dog.next);
