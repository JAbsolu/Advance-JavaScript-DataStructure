//non directed graph
const nonDirectedGraph = {
    1: [2,3,],
    2: [1,3,4,5],
    3: [1,2,4,5],
    4: [1,2,3,5],
    5: [1,2,3,4],
}

//Explore the graph using a stack
const exploreGraph = (graph, root) => {
    //if the root node does not exist in the graph, return a custom string
    if (!root) return "**** The root node does not exist! *****";
    //initialize a stack and a set. Add the root node as the first value in the stack
    const stack = [root];
    const visited = new Set(); 
    /*
     Use a while loop to loop the stack while it's not empty, then remove the last value and save it as current
     check if the value stored at current removed from the stack is in the set, if not then loop the array stored 
     at graph[current] in the graph
     add the each node from the array graph[current] to the stack, when the loop ends, add the value stored 
     in current to the set
    */
    while (stack.length > 0) {
        const current = stack.pop();
        if (!(visited.has(current))){
            for (let node of graph[current]) {
                stack.push(node);
            }
        }
        visited.add(current);
    }
    //return the set with the unique nodes
    return visited;
}

//test cases
console.log(exploreGraph(nonDirectedGraph, 1)); 
console.log(exploreGraph(nonDirectedGraph, 0)); 
console.log(exploreGraph(nonDirectedGraph, 4));