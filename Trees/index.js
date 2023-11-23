class BinaryTree {
    constructor(root){
        this.key = root;
        this.left = null;
        this.right = null;
    }
    // Get the value of the node
    getVal(){
        return this.key;
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
    //print the tree on the console using depth first traversal
    depth_first(){
        const stack = [this];

        while (stack.length > 0){
            const current = stack.pop()
            console.log(current.key)

            if (current.left !== null) {
                stack.push(current.left)
            }

            if (current.right!== null) {
                stack.push(current.right)
            }
        }
    }

    // print tree using breadth first traversal
    breadth_first(){
        const queue = [this]

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.key)

            if (current.left) {
                queue.push(current.left)
            }

            if (current.right) {
                queue.push(current.right)
            }
        }
    }
}

//Build a tree
const list = ['John', 'Nick', "Jeff", 'Anne', "Marry", "Bane", "Marie", "Jane Doe", "Ben Doe", "Doe Man", "Google", "Amazon", "Apple"];
const my_binary_tree = new BinaryTree(list[0]);

const buildTree = (list) => {
    for (let i = 1; i < list.length; i+=1) {
        my_binary_tree.insertLeftChild(list[i])
        if (list[i+1]) my_binary_tree.insertRightChild(list[i+1])
    }
    return my_binary_tree.depth_first();
}

buildTree(list);


console.log(`\n${'='.repeat(50)}`);
console.log('Breadth first print result\n');

my_binary_tree.breadth_first();



 //print the tree using preorder traversal
 console.log(`\n${'='.repeat(50)}`);
 console.log('Preorder print result\n');

 const preorder = (tree) => {
    if (tree) {
        preorder(tree.left)
        console.log(tree.key)
        preorder(tree.right)
    }
};
preorder(my_binary_tree);



 //print the tree using inorder traversal
console.log(`\n${'='.repeat(50)}`);
console.log('Inorder print result\n');

const inorder = (tree) => {
    if (tree) {
        inorder(tree.left)
        console.log(tree.key)
        inorder(tree.right)
    }
}
inorder(my_binary_tree)



 //print the tree using postorder traversal
console.log(`\n${'='.repeat(50)}`);
console.log('Postorder print result\n');

const postorder = (tree) => {
    if (tree) {
        postorder(tree.left)
        console.log(tree.key)
        postorder(tree.right)
    }
}

postorder(my_binary_tree)