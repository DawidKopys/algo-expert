// Dijkstra's Algorithm with Adjacency List (edges)

// You're given an integer start and a list edges of pairs of integers.

// The list is what's called an adjacency list, and it represents a graph. The integer start is the index of the start node in the adjacency list.
// The number of vertices in the graphs is equal to the length of edges, where each index i in edges contains vertex i's outbound edges, in no particular order.
// Each individual edge is represented by an array containing two values: [destination, distance] - the index of the vertex it points to, and the length of the edge (the distance from vertex i to vertex destination).
// Note that these edges are directed, meaning that you can only travel from the start vertex to the destination, not the other way around (unless there is another edge going back the other way).

// Write a function that calculates the shortest path from the start vertex to all other vertices in the graph using Dijkstra's algorithm and returns them in an array.
// Each index i in the output array should represent the length of the shortest path from the start vertex to vertex i. If no path is found from the start vertex to vertex i, then output[i] should be -1.

export function dijkstrasAlgorithm(start: number, edges: number[][][]) {
  // distances[i] - distance from start to node i
  // index - index of node
  // value - distance from start
  const distances: number[] = []
  const visited = new Set<number>()

  // initialize distances
  for (let i = 0; i < edges.length; i++) {
    distances[i] = Infinity
  }
  distances[start] = 0

  // index of vertex in edges
  let currentNode: number | null = start

  while (currentNode !== null) {
    visited.add(currentNode)

    // for each adjecent vertex of currentNode calculate its distance from start
    // to this node through currentNode
    for (const [adjecentNode, distanceCurrentToAdjecent] of edges[
      currentNode
    ]) {
      const distanceStartToCurrent = distances[currentNode]
      const distanceStartToAdjecentThroughCurrent =
        distanceStartToCurrent + distanceCurrentToAdjecent
      const currentLowestDistanceStartToAdjecent = distances[adjecentNode]!

      // ... and update distance with new lowest distance if found new lowest
      if (
        distanceStartToAdjecentThroughCurrent <
        currentLowestDistanceStartToAdjecent
      ) {
        distances[adjecentNode] = distanceStartToAdjecentThroughCurrent
      }
    }

    // set unvisited node with lowest distance as new currentNode
    currentNode = getMinDistanceUnvisitedNode(distances, visited)
  }

  return distances.map((distance) => distance === Infinity ? -1 : distance)
}

function getMinDistanceUnvisitedNode(
  distances: number[],
  visited: Set<number>
) {
  let currentMinDistance = Infinity
  let currentMinDistanceNode = null

  for (const [node, distance] of distances.entries()) {
    if (visited.has(node)) {
      continue
    }

    if (distance < currentMinDistance) {
      currentMinDistance = distance
      currentMinDistanceNode = node
    }
  }

  return currentMinDistanceNode
}

// const start = 0
// const edges = [
//   [[1, 7]], // node 0
//   [
//     // node 1
//     [2, 6],
//     [3, 20],
//     [4, 3]
//   ],
//   [[3, 14]], // node 2
//   [[4, 2]], // node 3
//   [], // node 4
//   [] // node 5
// ]

// const shortestPathsLengths = dijkstrasAlgorithm(start, edges)
// expected: [0, 7, 13, 27, 10, -1]
// console.log('shortestPathsLengths :', shortestPathsLengths)
