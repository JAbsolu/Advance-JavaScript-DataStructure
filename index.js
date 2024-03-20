/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
    /* 1. If the root is null, return 0, meaning the tree is empty and there are no subtrees
       2. Create a queue with the root node as its only value
       3. Initialize a depth with a default value of 0
    */
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    // While the queue's length is greater than 0
    while (queue.length > 0) {
        // Save the current lenth of the queue
        const size = queue.length;
        /* Start a new loop, that loops the queue as long as the
           incrementer is less than the queue's current size
           ** The queue's size is dynamic, it changes as items
           are added to it.
        */
        for (let i = 0; i < size; i+=1){
            // Pop out the last node/item in the queue and save it
            const node = queue.shift();
            /* check if the node has a left, if it does, add it to the queue. Check
               if the node has a right, if it does, add it to the queue. 
               
               At this point, even though new nodes have been added to the queue,
               The queue's size remains 1, because the size was saved earlier (const size = queue.length). 
               We're iterating based on that saved length, the lenth only updates 
               after the loop is broken and we start at the next iteration of the while loop
            */
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        /* Increment the depth by one each in everytime, 
           the queue size becomes 0 and we break out of the loop
        */
        depth += 1;
    }
    return depth;
}

























// const maxDepth = (root) => {
//     // If the root node is null, return 0, meaning the tree is empty 
//     // and there are no subtrees, so the depth is 0
//     if (!root) return 0;
    
//     /* Recursively call maxDepth(root.left), which calculates the depth 
//        of the left side of the tree and saves in the variable "right"
//     */
//     const right = maxDepth(root.left);
//     /* Recursively call maxDepth(root.left), which calculates the depth 
//        of the left side of the tree and saves in the variable "left"
//     */
//     const left = maxDepth(root.right);
    
//     /* Check which side has the highest depth and return the side + 1;
//        1 is added, to count starting from the root node of the tree,
//        which is not automatically counted when recursive calls are made
//     */
//     if (right > left) return right + 1
//     else return left + 1;
// }


