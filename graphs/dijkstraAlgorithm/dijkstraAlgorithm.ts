import { WeightedGraphVertex } from '../Vertex/directedGraph/WeightedGraphVertex'

export function dijkstraShortestPaths(startingNode: WeightedGraphVertex) {
  // 1. Initialize the distances table
  const distances = new Map([[startingNode, 0]])
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
      }
    }

    // 4. select an unvisited node from the distances table, that has the lowest distance
    const minDistanceNode = getMinDistanceUnvisitedNode(distances, visitedNodes)
    currentNode = minDistanceNode
  }

  return distances
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

const atlanta = new WeightedGraphVertex('Atlanta')
const boston = new WeightedGraphVertex('Boston')
const chicago = new WeightedGraphVertex('Chicago')
const denver = new WeightedGraphVertex('Denver')
const elPaso = new WeightedGraphVertex('El Paso')

atlanta.addAdjecentVertex(boston, 100)
atlanta.addAdjecentVertex(denver, 160)
boston.addAdjecentVertex(chicago, 120)
boston.addAdjecentVertex(denver, 180)
chicago.addAdjecentVertex(elPaso, 80)
denver.addAdjecentVertex(chicago, 40)
denver.addAdjecentVertex(elPaso, 140)
elPaso.addAdjecentVertex(atlanta, 100)

const result = dijkstraShortestPaths(atlanta)

// process output for prettier display
const prettierResult = new Map<string, number>()
for (const [city, price] of result) {
  prettierResult.set(city.value, price)
}

console.log('prettierResult :', prettierResult)
