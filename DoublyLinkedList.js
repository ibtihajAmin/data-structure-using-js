/*Problem Name : Doubly Linked List */

var head;

//This Node class is created for every node where it contains next and previous pointer
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.previous = null;
  }
}

//this function will be adding data at the first of list
function push(new_data) {
  var new_node = new Node(new_data);

  //Make next of the new node as head and previous as NULL
  new_node.next = head;
  new_node.previous = null;

  //Change prev of head node to the new node
  if (head != null) {
    head.previous = new_node;
  }

  //Move head to the point to new node
  head = new_node;
}

//This funcion is used for data insert after a given node
function insertAfter(previous_node, new_data) {
  var new_node = new Node(new_data);

  // Do check if the previous node is null
  if (previous_node == null) {
    console.log("You enter data in wrong position");
    return;
  }

  //Make next of new node as next of previous node
  new_node.next = previous_node.next;

  //Make the next of the previous node as new node
  previous_node.next = new_node;

  //Make the previous of new node as previous node
  new_node.previous = previous_node;

  //Change previous of new_node's next node
  if (new_node != null) {
    new_node.next.previous = new_node;
  }
}
