//Create the node class
class Node {
  constructor(data){
    this.val = data;
    this.next = null
  }
}

const nums = [1,2,3,4,5,6,7,8,9]; // create a number array
let linkedList = new Node(0); // create a new linked list with 0 as the head's value
let current = linkedList; // save current node as current

//Build a linked list
const buildList = (arr) => {
  for (let element of arr) { // itereate through numbers array
    const node = new Node(element);  // create a node
    current.next = node; // set current's next to point to the new node
    current = current.next; // reassign curernt to the next node
  }
}

buildList(nums); // invoke the build list function to create the list

// Traverse the linkedlist
const traverse = (head) => {
  const current = head; // save the head of the linked list in current
  if (current) { // if current is not null
    console.log(current.val); // print the current node's val
    traverse(current.next) // make a recursive call to the traverse function and pass the next node as arg
  }
}

traverse(linkedList); // invoke the traverse function