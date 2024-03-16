//non directed graph
const nonDirectedGraph = {
    1: [2,3,],
    2: [1,3,4,5],
    3: [1,2,4,5],
    4: [1,2,3,5],
    5: [1,2,3,4],
}

//Iterate through graph using recursion
const visited = new Set();
const exploreGraph = (graph, root) => {
    //base case
    if (!root) return "*** Root node does not exist ***";

    if (!(visited.has(root))) {
        for (let node of graph[root]){
            visited.add(root);      
            exploreGraph(graph, node);
        }
    }  
    return visited;
}

console.log(exploreGraph(nonDirectedGraph, 1));
console.log(exploreGraph(nonDirectedGraph, 3));
console.log(exploreGraph(nonDirectedGraph, 0));