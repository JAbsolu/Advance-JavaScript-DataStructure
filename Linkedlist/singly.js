class Node {
  constructor(data){
    this.val = data;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }
}

const nums = [1,2,3,4,5,6,7,8,9];
let linkedList = new Node(0);
let current = linkedList;

const buildList = (arr) => {
  for (let element of arr) {
    let node = new Node(element); 
    current.next = node;
    current = current.next;
  }
}

buildList(nums);

const traverse = (head) => {
  const current = head;
  if (current) {
    console.log(current.val);
    traverse(current.next)
  }
}

traverse(linkedList);