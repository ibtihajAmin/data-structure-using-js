//Problem Name : Construct a Queue with Linked List

// create a class of node
class Qnode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let front = null;
let rear = null;

//make enQueue function to insert data in the node
const enQueue = (data) => {
  let node = new Qnode(data);

  if (rear === null) {
    front = rear = node;
    return;
  }

  rear.next = node;
  rear = node;
};

//make deQueue function to remove the node from the list
const deQueue = () => {
  //if Queue is empty, return null
  if (front == null) {
    rear = null;
    console.log("Underflow");
    return;
  }

  //move the front pointer to the next node
  front = front.next;
};

const printQueue = () => {
  let rear = front;

  while (rear != null) {
    console.log(rear.data + " ");
    rear = rear.next;
  }
};

enQueue(10);
enQueue(20);
enQueue(30);
enQueue(40);

console.log("Queue after data enqueued : \n");
printQueue();

deQueue();
deQueue();

console.log("Queue after data dequeued : \n");
printQueue();
