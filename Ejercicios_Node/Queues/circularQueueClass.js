/* The circular queue should provide enqueue and dequeue methods which allow you to read from and write to the queue.
The class itself should also accept an integer argument which you can use to specify the size of the queue when created.
*/

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (!this.queue[this.write]) {
      this.queue.splice(this.write, 1, item);
      this.write < this.max ? this.write++ : (this.write = 0);
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read]) {
      const res = this.queue.splice(this.read, 1, null);
      this.read < this.max ? this.read++ : (this.read = 0);
      return res[0];
    }
    return null;
  }
}

const circularQueue = new CircularQueue(3);
console.log(circularQueue.print());
console.log(circularQueue.enqueue(1));
console.log(circularQueue.enqueue(2));
console.log(circularQueue.enqueue(3));
console.log(circularQueue.enqueue(4));
console.log(circularQueue.dequeue());
console.log(circularQueue.print());
console.log(circularQueue.dequeue());
console.log(circularQueue.print());
console.log(circularQueue.enqueue(1));
console.log(circularQueue.print());
console.log(circularQueue.enqueue(5));
console.log(circularQueue.print());
console.log(circularQueue.dequeue());
console.log(circularQueue.print());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.print());
