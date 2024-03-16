//non directed graph
const nonDirectedGraph = {
    1: [2,3,],
    2: [1,3,4,5],
    3: [1,2,4,5],
    4: [1,2,3,5],
    5: [1,2,3,4],
}

//Find if a value exists in a graph in an undirected graph, then return true or false \
const nodeExists = (graph, root, target) => {
    //return false if the root node is not in the graph
    if (!root) return false;
    //initialize a stack and a set
    const stack = [root];
    const visited = new Set();
    /*
    Loop the stack while it's not empty
    1. remove the last value in the stack and save it in a variable named current
    2. check if the set has the value stored in current
    3. if not. Access the array stored at graph[current] (current is a key in the graph map that stores an array)
    4. Loop the array stored at graph[current]
    5. Checks each node to see if it's the node you're looking for, if it is return true, if not add the node
    to the stack
    6. Repeat loop until we reach the end of the array, then finally add the value stored in current to the set
    7. Return false if the node at target was never found
    */
    while (stack.length > 0) {
        const current = stack.pop();
        if (!(visited.has(current))) {
            for (let node of graph[current]){
                if (node === target) return true;
                stack.push(node);
            }
        }
        visited.add(current);
    }
    return false;
}

//Test cases
const testCases = [
    nodeExists(nonDirectedGraph, 1, 3),
    nodeExists(nonDirectedGraph, 1, 9),
    nodeExists(nonDirectedGraph, 3, 2),
    nodeExists(nonDirectedGraph, 3, 10)
]

//Loop the testCases array and return the result of the test
for (let i = 0; i < testCases.length; i++) {
    if (testCases[i]) {
        console.log(`Test ${i+1} returned ${testCases[i]}: Passed`);
    } else {
        console.log(`Test ${i+1} returned ${testCases[i]}: Failed`);
    }
}