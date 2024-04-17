// Cycle In Graph

// You're given a list of edges representing an unweighted, directed graph with at least one node. Write a function that returns a boolean representing whether the given graph contains a cycle.

// The list is what's called an adjacency list, and it represents a graph.
// The number of vertices in the graphs is equal to the length of edges, where each index i in edges contains vertex i's outbound edges, in no particular order.
// Each individual edge is represented by a positive integer that denotes an index (the destination vertex) in the list that this vertex is connected to.
// Note that these edges are directed, meaning that you can only travel from the start vertex to the destination, not the other way around (unless there is another edge going back the other way).

// sol 1 - using modified BFS
//  for each node in `edges`, we perform BFS starting from the current node
//  if any of found nodes connects back to the current node - we know we have
//  a cycle and we return true
//  ... it can be improved for sure
// O(v + e) time and O(v) space
export function cycleInGraph(edges: number[][]) {
  for (let nodeIndex = 0; nodeIndex < edges.length; nodeIndex++) {
    const hasCycle = isStartOfCycle(nodeIndex, edges)
    if (hasCycle) {
      return true
    }
  }

  return false
}

// modified bfs 
export function isStartOfCycle(startNodeIndex: number, edges: number[][]) {
  const queue = [startNodeIndex]
  const visitedNodes = new Set([startNodeIndex])

  while (queue.length > 0) {
    const currentNodeIndex = queue.pop()!

    // add all neighbours to the queue
    for (const neighbourIndex of edges[currentNodeIndex]) {
      // our "special case" to find a cycle starting at startNodeIndex
      if (neighbourIndex === startNodeIndex) {
        return true
      }
    
      if (visitedNodes.has(neighbourIndex)) {
        continue
      }

      visitedNodes.add(currentNodeIndex)
      queue.unshift(neighbourIndex)
    }
  }

  return false
}
