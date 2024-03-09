import { Vertex } from '../Vertex/undirectedGraph/Vertex'

// sol 2 - using modified dfs
export function findPredecessorsDfs(startNode: Vertex, destinationNode: Vertex) {
  const queue = [startNode]
  const visitedNodes = new Set([startNode])
  const predecessors = new Map<Vertex, Vertex>()

  while (queue.length > 0) {
    const currentNode = queue.pop()!

    for (const adjecentNode of currentNode.adjecentVertices) {
      if (visitedNodes.has(adjecentNode)) {
        continue
      }

      visitedNodes.add(adjecentNode)
      queue.unshift(adjecentNode)
      predecessors.set(adjecentNode, currentNode)

      // no need to keep traversing
      if (adjecentNode === destinationNode) {
        return predecessors
      }
    }
  }

  return predecessors  
}

export function findShortestPathDfs(startNode: Vertex, destinationNode: Vertex) {
  const predecessors = findPredecessorsDfs(startNode, destinationNode)
  const path = [destinationNode.value]
  let currentNode = predecessors.get(destinationNode)

  while (currentNode) {
    path.unshift(currentNode.value)
    currentNode = predecessors.get(currentNode)
  }

  return path
}
