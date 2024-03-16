
//Find if a value exists in a graph in an undirected graph, then return true or false \
const nodeExists = (graph, root, target) => {
    if (!root) return false;

    const stack = [root];
    const visited = new Set();

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

const testCases = [
    nodeExists(nonDirectedGraph, 1, 3),
    nodeExists(nonDirectedGraph, 1, 9),
    nodeExists(nonDirectedGraph, 3, 2),
    nodeExists(nonDirectedGraph, 3, 10)
]

//test cases
for (let i = 0; i < testCases.length; i++) {
    if (testCases[i]) {
        console.log(`Test ${i+1} returned ${testCases[i]}: Passed`);
    } else {
        console.log(`Test ${i+1} returned ${testCases[i]}: Failed`);
    }
}



