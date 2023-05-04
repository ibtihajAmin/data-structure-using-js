//Problem Name : Queue Data Sturcture using Array

//Declare Queue Class
class Queue {
  constructor() {
    this.items = [];
  }

  //this method will check the queue list is empty or not
  isEmpty() {
    return this.items.length === 0;
  }

  //this method is doing to insert the data in the array
  enQueue(data) {
    this.items.push(data);
  }

  //this method will delete the data at first of the position
  deQueue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  //this method will return the first element of the queue
  front() {
    if (this.isEmpty()) {
      return "No element in Queue";
    }
    return this.items[0];
  }

  //this method will return the last element of the queue
  rear() {
    if (this.isEmpty()) {
      return "No Element in Queue";
    }
    return this.items[this.items.length - 1];
  }

  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i] + " ");
    }
  }
}

let queueData = new Queue();

console.log("Queue after enQueue operation :\n");
queueData.enQueue(10);
queueData.enQueue(20);
queueData.enQueue(30);
queueData.enQueue(40);
queueData.enQueue(50);
queueData.enQueue(60);

queueData.printQueue();

console.log("Queue after deQueue operation : \n");
queueData.deQueue();
queueData.deQueue();

queueData.printQueue();
