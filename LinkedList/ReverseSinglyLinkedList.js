/*Problem name : Reverse the singly linked list */

var head;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

// This function is created for data insertion at first position
function push(new_data) {
  var new_node = new Node(new_data);

  new_node.next = head;

  head = new_node;
}

//This function is created for reverse the linked list
function reverseList(node) {
  var prev_pointer = null;
  var current = node;
  var next_pointer = null;

  while (current != null) {
    next_pointer = current.next;
    current.next = prev_pointer;
    prev_pointer = current;
    current = next_pointer;
  }
  node = prev_pointer;
  return node;
}

// print reversed linked list
function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
}

push(2);
push(3);
push(4);
push(5);

printList(head);
console.log("\n");

var reversedList = reverseList(head);
printList(reversedList);
