/* Write an add method that assigns the first node you push to the linked list to the head;
after that, whenever adding a node, every node should be referenced by the previous node's next property.

Note: Your list's length should increase by one every time an element is added to the linked list. */

function LinkedList() {
  let length = 0;
  let head = null;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    const node = new Node(element);
    if (head) {
      let current = head;
      if (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    } else {
      head = node;
    }
    length++;
    // Only change code above this line
  };
}

const linkedList = new LinkedList();
linkedList.add("Kitten");
console.log(linkedList.head());
linkedList.add("Puppy");
console.log(linkedList.head());
console.log(linkedList.size());
