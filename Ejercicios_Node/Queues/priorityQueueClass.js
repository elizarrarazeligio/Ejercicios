/*  You will need to add an enqueue method for adding items with a priority,
a dequeue method for removing and returning items,
a size method to return the number of items in the queue,
a front method to return the element at the front of the queue,
and finally an isEmpty method that will return true if the queue is empty or false if it is not.

The enqueue should accept items with the format shown above (['human', 1]) where 1 represents the priority.
dequeue and front should return only the item's name, not its priority. */

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };

  this.enqueue = function (item) {
    if (this.collection.length == 0) return this.collection.push(item);
    for (let i = 0; i < this.collection.length; i++) {
      const currItem = this.collection[i];
      if (item[1] < currItem[1]) {
        return this.collection.splice(i, 0, item);
      } else if (i == this.collection.length - 1) {
        return this.collection.push(item);
      } else {
        continue;
      }
    }
  };

  this.dequeue = function () {
    const item = this.collection.shift();
    return item[0];
  };

  this.size = function () {
    return this.collection.length;
  };

  this.front = function () {
    return this.collection[0][0];
  };

  this.isEmpty = function () {
    return this.collection.length == 0 ? true : false;
  };
}

const priorityQueue = new PriorityQueue();

priorityQueue.printCollection();
priorityQueue.enqueue(["kitten", 2]);
priorityQueue.enqueue(["dog", 2]);
priorityQueue.enqueue(["rabbit", 3]);
priorityQueue.enqueue(["human", 1]);

priorityQueue.printCollection();
console.log(priorityQueue.dequeue());
priorityQueue.printCollection();
console.log(priorityQueue.size());
console.log(priorityQueue.front());
console.log(priorityQueue.isEmpty());
