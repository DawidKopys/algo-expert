export type River = { nodes: [number, number][]; isIsland: boolean }

export function removeIslands(matrix: number[][]): number[][] {
  const islands = getIslands(matrix)

  for (const island of islands) {
    for (const [rowIdx, columnIdx] of island.nodes) {
      matrix[rowIdx][columnIdx] = 0
    }
  }

  return matrix
}

export function getIslands(matrix: number[][]) {
  const visitedNodes = new Set<string>() // stores '<row><column>' entries
  const rivers: River[] = []

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      const currentNode = matrix[rowIdx][columnIdx]

      if (currentNode === 0) {
        continue
      }

      if (visitedNodes.has(`${rowIdx},${columnIdx}`)) {
        continue
      }

      // currentNode = 1
      const river = dfsTraverse(matrix, rowIdx, columnIdx, visitedNodes)
      console.log('river :', river)
      
      
      if (river && river.isIsland) {
        rivers.push(river)
      }
    }
  }

  return rivers
}

export function dfsTraverse(
  matrix: number[][],
  rowIdx: number,
  columnIdx: number,
  visitedNodes: Set<string>,
  river: River = { nodes: [], isIsland: true }
) {
  if (matrix[rowIdx][columnIdx] === 0) {
    return null
  }

  // 'visit' node and mark it as visited
  visitedNodes.add(`${rowIdx},${columnIdx}`)

  river.nodes.push([rowIdx, columnIdx])
  river.isIsland = river.isIsland && !isBorderNode(matrix, rowIdx, columnIdx)

  for (const [neighbourRowIdx, neighbourColumnIdx] of getNeighbours(
    matrix,
    rowIdx,
    columnIdx
  )) {
    if (visitedNodes.has(`${neighbourRowIdx},${neighbourColumnIdx}`)) {
      continue
    }

    dfsTraverse(
      matrix,
      neighbourRowIdx,
      neighbourColumnIdx,
      visitedNodes,
      river
    )
  }

  return river
}

export function isBorderNode(
  matrix: number[][],
  rowIdx: number,
  columnIdx: number
) {
  const rowsNumber = matrix.length
  const columnsNumber = matrix[0].length

  return (
    rowIdx === 0 || // top border
    rowIdx === rowsNumber - 1 || // bottom border
    columnIdx === 0 || // left border
    columnIdx === columnsNumber - 1 // right border
  )
}

export function getNeighbours(
  matrix: number[][],
  rowIdx: number,
  columnIdx: number
) {
  const neighbours: [number, number][] = []
  const rowsNumber = matrix.length
  const columnsNumber = matrix[0].length

  // top neighbour
  if (rowIdx > 0) {
    neighbours.push([rowIdx - 1, columnIdx])
  }

  // bottom neighbour
  if (rowIdx < rowsNumber - 1) {
    neighbours.push([rowIdx + 1, columnIdx])
  }

  // left neighbour
  if (columnIdx > 0) {
    neighbours.push([rowIdx, columnIdx - 1])
  }

  // right neighbour
  if (columnIdx < columnsNumber - 1) {
    neighbours.push([rowIdx, columnIdx + 1])
  }

  return neighbours
}
