class BinaryTree {
    constructor(root){
        this.val = root;
        this.left = null;
        this.right = null;
    }
    // Get the value of the node
    getVal(){
        return this.val;
    }
    // Get the left child
    getLeftChild(){
        return this.left;
    }
    // get the right child
    getRightChild(){
        return this.right;
    }
    //insert a left child
    insertLeftChild(new_val){
        if (this.left === null) {
            this.left = new BinaryTree(new_val)
        } else {
            const new_node = new BinaryTree(new_val)
            new_node.left = this.left
            this.left = new_node
        }
    }
    //insert a right child
    insertRightChild(new_val){
        if (this.right === null) {
            this.right = new BinaryTree(new_val)
        } else {
            const new_node = new BinaryTree(new_val)
            new_node.right = this.right
            this.right = new_node
        }
    }
    //print the tree on the console
    stringValue(){
        const stack = [this];
        let index = 1;

        while (stack.length > 0){
            let current = stack.pop()
            console.log(`Root Node: `, current.getVal())

            if (current.getLeftChild()) {
                stack.push(current.getLeftChild())
                console.log(`Node ${index}'s left `, current.getLeftChild().getVal(), `\n`)
            }

            if (current.getRightChild()) {
                stack.push(current.getRightChild())
                console.log(`Node ${index}'s right `, current.getRightChild().getVal(), `\n`)
            }

            index+=1;
        }
    }

}

//Build a tree
const list = ['John', 'Nick', "Jeff", 'Anne', "Marry", "Bane", "Marie", "Jane Doe"];
let my_binary_tree = new BinaryTree(list[0]);

const buildTree = (list) => {
    for (let i = 1; i < list.length; i+=1) {
        my_binary_tree.insertLeftChild(list[i])
        my_binary_tree.insertRightChild(list[i+1])
    }
    console.log(my_binary_tree.stringValue());
    console.log(my_binary_tree);
}

buildTree(list);