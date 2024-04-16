// sol 2 - treating this as a graph problem

// traverse the matrix, treating it as a graph, and its elements as nodes
// if node's value is 0 - we do nothing
// if node's value is 1, then we know its a part of a river, so we:
//   - if it was already visited - we do nothing
//   - if it wasn't visited - apply graph search algorithm of our choice (DFS/BFS) recursively,
//     ... to find all parts of this river while keeping track of already visited river parts

export function riverSizes(matrix: number[][]) {
  const visitedNodes = new Set<string>() // stores 'row,column' entries
  const rivers: number[] = []

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      const currentNode = matrix[rowIdx][columnIdx]

      if (currentNode === 0) {
        continue
      }

      // currentNode = 1
      if (visitedNodes.has(`${rowIdx},${columnIdx}`)) {
        // node already visited - ignore it
        continue
      }

      // perform DFS on this node
      const riverLength = dfsTraverse(matrix, rowIdx, columnIdx, visitedNodes)
      rivers.push(riverLength)
    }
  }

  return rivers
}

function dfsTraverse(
  matrix: number[][],
  rowIdx: number,
  columnIdx: number,
  visitedNodes: Set<string>,
  river = { riverLength: 0 }
): number {
  // mark current node as visited
  visitedNodes.add(`${rowIdx},${columnIdx}`)
  const currentNode = matrix[rowIdx][columnIdx]

  if (currentNode === 1) {
    river.riverLength += 1

    const neighbours = getNeighbours(matrix, rowIdx, columnIdx)

    for (const [neighbourRowIdx, neighbourColumnIdx] of neighbours) {
      if (visitedNodes.has(`${neighbourRowIdx},${neighbourColumnIdx}`)) {
        continue
      }

      dfsTraverse(matrix, neighbourRowIdx, neighbourColumnIdx, visitedNodes, river)
    }
  }

  return river.riverLength
}

function getNeighbours(matrix: number[][], rowIdx: number, columnIdx: number): [number, number][] {
  const neighbours: [number, number][] = []
  const numRows = matrix.length
  const numColumns = matrix[0].length

  // Check top neighbour
  if (rowIdx > 0) {
    neighbours.push([rowIdx - 1, columnIdx])
  }

  // Check bottom neighbour
  if (rowIdx < numRows - 1) {
    neighbours.push([rowIdx + 1, columnIdx])
  }

  // Check left neighbour
  if (columnIdx > 0) {
    neighbours.push([rowIdx, columnIdx - 1])
  }

  // Check right neighbour
  if (columnIdx < numColumns - 1) {
    neighbours.push([rowIdx, columnIdx + 1])
  }

  return neighbours
}
