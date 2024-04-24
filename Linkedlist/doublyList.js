//Create the node class
class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
    this.previous = null;
  }
}

const nums = [1,2,3,4,5,6,7,8,9]; // create a number array
let linkedList = new Node(0); // create a new linked list with 0 as the head's value
let current = linkedList; // save current node as current

//Build a linked list
const buildList = (arr) => {
  for (let element of arr) { // itereate through numbers array
    const node = new Node(element);  // create a node
    let previous = current;
    current.next = node; // set current's next to point to the new node
    current = current.next; // reassign curernt to the next node
    current.previous = previous;
  }
}

buildList(nums); // invoke the build list function to create the list

// Traverse the linkedlist
const traverse = (head) => {
  const current = head; // save the head of the linked list in current
  if (current) { // if current is not null
    const prev = current.previous; // get next node
    const next = current.next; // get previous node
    if (prev) console.log( "Prev: \t ", prev.val); // print the current node's previous
    console.log( "Current: ", current.val); // print the current node's val
    if (next) console.log( "Next: \t ", next.val); // print the current node's next
    console.log("\n"); // print a new line
    traverse(current.next) // make a recursive call to the traverse function and pass the next node as arg
  }
}

traverse(linkedList); // invoke the traverse function