import { WeightedGraphVertex } from '../Vertex/directedGraph/WeightedGraphVertex'

export function dijkstraShortestPaths(startingNode: WeightedGraphVertex) {
  // 1. Initialize the distances table
  const distances = new Map([[startingNode, 0]])
  const predecessors = new Map<WeightedGraphVertex, WeightedGraphVertex>()
  const visitedNodes = new Set<WeightedGraphVertex>()

  // 2. Set the starting node as the current node
  let currentNode: WeightedGraphVertex | null = startingNode

  while (currentNode) { // 5. repeat until there are no more nodes to visit
    visitedNodes.add(currentNode)

    // 3. for each neighbor of the current node, update the distance in the
    // distance table if the distance from the start node to the neighbor
    // is less than the current distance in the table
    for (const [
      adjacentNode,
      distanceCurrentToAdjacent
    ] of currentNode.adjecentVertices) {
      const distanceStartingToCurrent = distances.get(currentNode)!
      const distanceStartingToAdjacent =
        distanceStartingToCurrent + distanceCurrentToAdjacent
      const currentLowestDistanceToAdjacent =
        distances.get(adjacentNode) ?? Infinity

      if (
        distanceStartingToAdjacent < currentLowestDistanceToAdjacent
      ) {
        distances.set(adjacentNode, distanceStartingToAdjacent)
        predecessors.set(adjacentNode, currentNode)
      }
    }

    // 4. select an unvisited node from the distances table, that has the lowest distance
    const minDistanceNode = getMinDistanceUnvisitedNode(distances, visitedNodes)
    currentNode = minDistanceNode
  }

  return { distances, predecessors }
}

export function getShortestPath(startingNode: WeightedGraphVertex, destinationNode: WeightedGraphVertex) {
  const { predecessors } = dijkstraShortestPaths(startingNode)
  let shortestPath: string[] = [destinationNode.value]
  let currentNode = predecessors.get(destinationNode)

  while (currentNode) {
    shortestPath.unshift(currentNode.value)
    currentNode = predecessors.get(currentNode)
  }

  return shortestPath
}

function getMinDistanceUnvisitedNode(
  distances: Map<WeightedGraphVertex, number>,
  visitedNodes: Set<WeightedGraphVertex>
) {
  let minDistance = Infinity
  let minDistanceNode: WeightedGraphVertex | null = null

  for (const [node, distance] of distances) {
    if (visitedNodes.has(node)) {
      continue
    }
    if (distance < minDistance) {
      minDistance = distance
      minDistanceNode = node
    }
  }

  return minDistanceNode
}
