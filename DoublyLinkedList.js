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

//Add a node after a given node in a Doubly Linked list
function insertBefore(next_node, new_data) {
  // Do check if the next node is null
  if (next_node == null) {
    console.log("Sorry! Wrong Position");
    return;
  }

  //Create new node
  var new_node = new Node(new_data);

  // Make previous of next node as new node
  new_node.previous = next_node.previous;

  // Making prev of next node as new node
  next_node.previous = new_node;

  //Make next of new node as next node
  new_node.next = next_node;

  // Do check if new node is located as head
  if (new_node.previous != null) {
    new_node.previous.next = new_node;
  } else {
    head = new_node;
  }
}

//Add a node in the last of the list
function append(new_data) {
  //Create a node
  var new_node = new Node(new_data);

  var last = head;

  //As this is the last node, so make next of the node is null
  new_node.next = null;

  //Do check the list is empty or not. If empty, then make new node as head
  if (head == null) {
    new_node.previous = null;
    head = new_node;
    return;
  }

  //Now travarse the list till find out the last node
  while (last.next != null) {
    last = last.next;
  }

  //change the next of last node
  last.next = new_node;

  //Make last node as previous of new node
  new_node.previous = last;
}

function printLinkedList(node) {
  var last = null;

  console.log("Forward Direction");
  while (node != null) {
    console.log(node.data + " ");
    last = node;
    node = node.next;
  }

  console.log("Backward Direction");
  while (last != null) {
    console.log(last.data + " ");
    last = last.previous;
  }
}

push(7);
push(5);
append(3);
insertAfter(head.next, 11);
insertBefore(head.next.next, 17);

printLinkedList(head);
