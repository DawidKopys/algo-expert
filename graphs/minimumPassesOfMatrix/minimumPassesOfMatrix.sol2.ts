// sol 2 - similar to performing BFS on positive numbers
// time complexity: O(w * h) because we have to only iterate over
// the matrix once*
// * well, twice, at the end we check if there are any negative numbers left
//   in the matrix, but it doesn't change the time complexity
export function minimumPassesOfMatrix(matrix: number[][]) {
  let passCounter = 0
  let currentQueue: [number, number][] = []
  let nextQueue: [number, number][] = []

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] > 0) {
        currentQueue.push([row, column])
      }
    }
  }

  while (currentQueue.length > 0) {
    // process queue once
    while (currentQueue.length > 0) {
      const [currentElementRow, currentElementColumn] = currentQueue.shift()!
  
      for (const [neighbourRow, neighbourColumn] of getNeighbours(
        matrix,
        currentElementRow,
        currentElementColumn
      )) {
        if (matrix[neighbourRow][neighbourColumn] < 0) {
          matrix[neighbourRow][neighbourColumn] *= -1
          nextQueue.push([neighbourRow, neighbourColumn])
        }
      }
    }

    passCounter += 1;

    // make next queue the current one
    [currentQueue, nextQueue] = [nextQueue, currentQueue]
  }
  
  const hasNegativeValue = matrix.some((row) => row.some((cell) => cell < 0))
  return hasNegativeValue ? -1 : passCounter - 1
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
