class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    getHead() {
        return this.head;
    }

    getHeadValue() {
        return this.head ? this.head.val : null;
    }

    setNext(val) {
        if (this.head === null) {
            this.head = new Node(val);
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = new Node(val);
        }
    }
}

const new_list = new LinkedList();

const buildList = (list) => {
    for (let i = 5; i < 20; i += 1) {
        list.setNext(i);
    }
    return list;
}

buildList(new_list);

console.log(new_list.getHeadValue());

const printList = (list) => {
    let current = list.getHead();

    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

printList(new_list);


//Traverse list recursivelu
const traverseList = (current) => {
    
    if (current) {
        console.log(current.val);
        traverseList(current.next);
    }
};

console.log("*".repeat(60))
traverseList(new_list.head)