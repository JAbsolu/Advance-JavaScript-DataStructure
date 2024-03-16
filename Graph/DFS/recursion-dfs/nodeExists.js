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
    if (!root) return false;

    if (!(visited.has(root))) {
        for (let node of graph[root]) {
            if (node === target) return true;
            visited.add(root);
            nodeExists(graph, node, target);
        }
    }
    return false;
}

//test cases
const testCases = [
    nodeExists(nonDirectedGraph, 1, 3),
    nodeExists(nonDirectedGraph, 1, 9),
    nodeExists(nonDirectedGraph, 3, 2),
    nodeExists(nonDirectedGraph, 3, 10)
]

for (let i = 0; i < testCases.length; i++) {
    if (testCases[i]) {
        console.log(`Test ${i+1} returned ${testCases[i]}: Passed`);
    } else {
        console.log(`Test ${i+1} returned ${testCases[i]}: Failed`);
    }
}



