/*Problem Name : Reverse a doubly linked list */

var head;

//Node creation class
class Node {
  constructor(val) {
    this.data = val;
    this.previous = null;
    this.next = null;
  }
}

// this function will be used for data insertion
function push(new_data) {
  var new_node = new Node(new_data);

  //As we are adding at its beginning, so previous will be null
  new_node.previous = null;

  //Set the next of the new node
  new_node.next = head;

  //Change the previous of head node
  if (head != null) {
    head.previous = new_node;
  }

  //Move the head to point to the new node
  head = new_node;
}

//Function to Reverse the doubly linked list
function reverseList() {
  var temp = null;
  var current = head;

  //Swap the next and previous pointer for all nodes of doubly linked list
  while (current != null) {
    temp = current.previous;
    current.previous = current.next;
    current.next = temp;
    current = current.previous;
  }

  if (temp != null) {
    head = temp.previous;
  }
}

//function for the print list
function printLinkedList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

push(2);
push(4);
push(6);
push(8);
push(10);

console.log("Linked List before reversed : \n");
printLinkedList(head);

reverseList();

console.log("Linked List after reversed : \n");
printLinkedList(head);
