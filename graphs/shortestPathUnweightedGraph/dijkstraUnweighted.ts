import { Vertex } from '../Vertex/undirectedGraph/Vertex'

type DijkstraResult = {
  distances: Map<Vertex, number>
  predecessors: Map<Vertex, Vertex>
}

// sol 1 - using modified dijkstra algorithm - just use 1 as weight of all edges
export function dijkstraUnweighted(startNode: Vertex): DijkstraResult {
  const distances = new Map<Vertex, number>([[startNode, 0]])
  const predecessors = new Map<Vertex, Vertex>()
  const visitedNodes = new Set<Vertex>()

  let currentNode: Vertex | null = startNode

  while (currentNode !== null) {
    visitedNodes.add(currentNode)

    for (const adjacentVertex of currentNode.adjecentVertices) {
      const distanceStartingToAdjecent = distances.get(currentNode)! + 1
      const currentLowestDistanceToAdjacent =
        distances.get(adjacentVertex) ?? Infinity

      if (distanceStartingToAdjecent < currentLowestDistanceToAdjacent) {
        distances.set(adjacentVertex, distanceStartingToAdjecent)
        predecessors.set(adjacentVertex, currentNode)
      }
    }

    currentNode = getMinDistanceUnvisitedNode(distances, visitedNodes)
  }

  return { distances, predecessors }
}

export function getShortestPath(startNode: Vertex, destinationNode: Vertex) {
  const { predecessors } = dijkstraUnweighted(startNode)
  const path = [destinationNode.value]
  let currentNode = predecessors.get(destinationNode)

  while (currentNode) {
    path.unshift(currentNode.value)
    currentNode = predecessors.get(currentNode)
  }

  return path
}

function getMinDistanceUnvisitedNode(distances: Map<Vertex, number>, visited: Set<Vertex>) {
  let currentMinDistance = Infinity
  let currentMinDistanceVertex: Vertex | null = null

  for (const [vertex, distance] of distances) {
    if (visited.has(vertex)) {
      continue
    }
    
    if (distance < currentMinDistance) {
      currentMinDistance = distance
      currentMinDistanceVertex = vertex
    }
  }

  return currentMinDistanceVertex
}
