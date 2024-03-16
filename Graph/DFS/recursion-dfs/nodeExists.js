//non directed graph
const nonDirectedGraph = {
    1: [2,3,],
    2: [1,3,4,5],
    3: [1,2,4,5],
    4: [1,2,3,5],
    5: [1,2,3,4],
}

//Find if a value exists in a graph in an undirected graph, then return true or false \
const visited = new Set();
const nodeExists = (graph, root, target) => {
    //If the root is not a node in the graph, return false
    if (!root) return false;
    /*
        1. Check if the root node has already been visited
        2. If not, access the array stored at graph[root] (root is a key in the graph map with an array as value)
        3. If the node is equal to the target node, return true
        4. If true was not returned, add the root node to the set. (mark the root node as visited)
        5. Recall the nodeExists function (recursion) => Repeating the steps again, this time
        passing the same graph, with the root node being the current node you're visiting in the array, and target 
        remaining the same. Whenever nodeExists() is called, the only argument that's changed is the root node,
        this repeats until either true is return or until every node have been visited.
        6. Return false, if true is never returned
    */
    if (!(visited.has(root))) {
        for (let node of graph[root]) {
            if (node === target) return true;
            visited.add(root);
            nodeExists(graph, node, target);
        }
    }
    //If true was never returned, return false
    return false;
}

//Test cases
const testCases = [
    nodeExists(nonDirectedGraph, 1, 3),
    nodeExists(nonDirectedGraph, 1, 9),
    nodeExists(nonDirectedGraph, 3, 2),
    nodeExists(nonDirectedGraph, 3, 10)
]

//Loop through the testcases array, and return the result of the test
for (let i = 0; i < testCases.length; i++) {
    if (testCases[i]) {
        console.log(`Test ${i+1} returned ${testCases[i]}: Passed`);
    } else {
        console.log(`Test ${i+1} returned ${testCases[i]}: Failed`);
    }
};