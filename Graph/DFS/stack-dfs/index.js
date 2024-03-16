//non directed graph
const nonDirectedGraph = {
    1: [2,3,],
    2: [1,3,4,5],
    3: [1,2,4,5],
    4: [1,2,3,5],
    5: [1,2,3,4],
}

//Iterate through graph using a stack
//return the set containing each unique nodes

const exploreGraph = (graph, root) => {
    const stack = [root];
    const visited = new Set(); 

    while (stack.length > 0) {
        const current = stack.pop();
        if (!(visited.has(current))){
            for (let node of graph[current]) {
                stack.push(node);
            }
        }
        visited.add(current);
    }
    return visited;
}

console.log(exploreGraph(nonDirectedGraph, 1));

