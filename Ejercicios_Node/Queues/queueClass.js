/* Write an enqueue method that pushes an element to the tail of the queue,
a dequeue method that removes and returns the front element,
a front method that lets us see the front element,
a size method that shows the length,
and an isEmpty method to check if the queue is empty. */

function Queue() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length == 0 ? true : false;
  };
}

const queue1 = new Queue();
queue1.enqueue("Hola");
queue1.enqueue("Adiós");
queue1.print();
console.log(queue1.size());
console.log(queue1.front());
console.log(queue1.dequeue());
queue1.print();
console.log(queue1.isEmpty());
