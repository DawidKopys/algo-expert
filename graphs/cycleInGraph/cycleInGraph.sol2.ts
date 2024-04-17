// Cycle In Graph

// You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

// The list is what's called an adjacency list, and it represents a graph.
// The number of vertices in the graphs is equal to the length of edges, where each index i in edges contains vertex i's outbound edges, in no particular order.
// Each individual edge is represented by a positive integer that denotes an index (the destination vertex) in the list that this vertex is connected to.
// Note that these edges are directed, meaning that you can only travel from the start vertex to the destination, not the other way around (unless there is another edge going back the other way).

// sol 2 - using modified DFS (recursive approach)
//  1. for each node in `edges`, we perform DFS starting from the current node:
//    1. we mark each node as visited and add add it to the current stack
//    2. we iterate over current node's neighbours
//       1. if the node wasn't visited yet, we perform DFS recursively on this node
//       2. if the node was already visited, we check if it is in the current stack
//         - if yes - we know we have a cycle and we return true
//       3. we remove current node from the current stack
// O(v + e) time and O(v) space
export function cycleInGraph(edges: number[][]) {
  const numberOfEdges = edges.length
  const visited: boolean[] = Array(numberOfEdges).fill(false)
  const currentlyInStack: boolean[] = Array(numberOfEdges).fill(false)

  for (let nodeIndex = 0; nodeIndex < edges.length; nodeIndex++) {
    const hasCycle = nodeHasCycle(nodeIndex, edges, visited, currentlyInStack)
    if (hasCycle) {
      return true
    }
  }

  return false
}

// modified bfs
export function nodeHasCycle(
  startNodeIndex: number,
  edges: number[][],
  visited: boolean[],
  currentlyInStack: boolean[]
) {
  visited[startNodeIndex] = true
  currentlyInStack[startNodeIndex] = true

  for (const neighbourIndex of edges[startNodeIndex]) {
    if (!visited[neighbourIndex]) {
      const hasCycle = nodeHasCycle(
        neighbourIndex,
        edges,
        visited,
        currentlyInStack
      )
      if (hasCycle) {
        return true
      }
    } else if (currentlyInStack[neighbourIndex]) {
      return true
    }
  }

  currentlyInStack[startNodeIndex] = false
  return false
}
