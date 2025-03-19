/* Write a push method that pushes an element to the top of the stack,
a pop method that removes and returns the element on the top of the stack,
a peek method that looks at the top element in the stack,
an isEmpty method that checks if the stack is empty,
and a clear method that removes all elements from the stack.

Normally stacks don't have this, but we've added a print helper method that console logs the collection. */

function Stack() {
  var collection = [];
  this.print = function () {
    console.log(collection);
  };

  this.push = function (element) {
    collection.push(element);
  };

  this.pop = function () {
    return collection.pop();
  };

  this.peek = function () {
    return collection[collection.length - 1];
  };

  this.isEmpty = function () {
    return collection.length == 0 ? true : false;
  };

  this.clear = function () {
    collection = [];
  };
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.print();
console.log(stack1.pop());
stack1.print();
console.log(stack1.peek());
console.log(stack1.isEmpty());
stack1.clear();
stack1.print();
