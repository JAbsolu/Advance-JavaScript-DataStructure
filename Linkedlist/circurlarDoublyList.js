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

/**
 * @param {*} arr takes an array
 * builds the linked list
 */
const buildList = (arr) => {
  let i = 0;
  while (i < arr.length) { // itereate through numbers array
    const node = new Node(arr[i]);  // create a node
    let previous = current;
    current.next = node; // set current's next to point to the new node
    current = current.next; // reassign curernt to the next node
    current.previous = previous;
    i += 1;
  }
}

buildList(nums);

// Trying to get the length of the
const getSize = (head) => {
  let current = head; // save the head of list in current
  let size = 0; // initiate size to be 0

  while (current) {
    size += 1; // add one to size
    current = current.next; // move pointer to next node
  }

  return size; // return the size of the list
}

console.log('List size', getSize(linkedList))

/**
 * @param {*} head takes the head of the linkedlist 
 * @returns prints out the linked list
 */
let index = 0;
const traverse = (head) => {
  const current = head; // save the head of the linked list in current
  if (current) { // if current is not null
    index += 1;
    const prev = current.previous;
    const next = current.next; // get previous node
    if (prev) console.log( "Prev: \t ", prev.val); // print the current node's val
    console.log( "Current: ", current.val); // print the current node's val
    if (next) console.log( "Next: \t ", next.val); // print the current node's next
    console.log("\n"); // print a new line
    traverse(current.next) // make a recursive call to the traverse function and pass the next node as arg
  }
  if ( index === getSize(linkedList) ) return;
}

traverse(linkedList); // invoke the traverse function