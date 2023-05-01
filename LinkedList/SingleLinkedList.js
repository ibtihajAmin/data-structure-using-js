/*Problem : Single Linked List */

var head;

/*Node Class creation */
class Node {
  //Constructor for the Node class
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

/*This push funcion is created for data insertion in the node*/
function push(new_data) {
  /*Create a node and put in the data*/
  var new_node = new Node(new_data);

  /*Make next pointer as a head of new node*/
  new_node.next = head;

  /*Move the head to the point to the new Node*/
  head = new_node;
}

/*This function is created for data insertion for a node after given node*/
function pushAfter(previous_node, new_data) {
  /*Do check if the given node is null */
  if (previous_node == null) {
    console.log("Sorry! You push your data in wrong position");
    return;
  }

  /*Create new node & put in the data*/
  var new_node = new Node(new_data);

  /*Make next of the new node as a next of the previous node*/
  new_node.next = previous_node.next;

  /*Make next of the previous node as new node*/
  previous_node.next = new_node;
}

/*Append the data at the last of the list using append function*/
function append(new_data) {
  /*Create a new node and put in the data*/
  var new_node = new Node(new_data);

  /* if the list is empty, then make sure the new node as head*/
  if (head == null) {
    head = new Node(new_data);
    return;
  }

  /*make sure this node is going to be last node*/
  new_node.next = null;

  /*Now travarse till the last node to append the data*/
  var last = head;
  while (last.next != null) last = last.next;

  last.next = new_node;
  return;
}

/*Delete the data/key by using the function */
function deleteNode(key) {
  var temp = head,
    prev = null;

  //If head node itself holds the key then key will be deleted
  if (temp != null && temp.data == key) {
    head = temp.next; //head changed
    return;
  }

  // Doing search the key/data, keep track of the previous node as we need to change temp.next
  while (temp != null && temp.data != key) {
    prev = temp;
    temp = temp.next;
  }

  // If the key is not present in linked list
  if (temp == null) return;

  //Unlinled the node of the linked list
  prev.next = temp.next;
}

/*Creating the funtion for print the LinkedList*/
function printLinkedList() {
  var print_node = head;
  while (print_node != null) {
    console.log(print_node.data + " ");
    print_node = print_node.next;
  }
}

append(6);
push(7);
push(1);
append(4);
pushAfter(head.next, 8);
append(10);
deleteNode(1);

printLinkedList();
