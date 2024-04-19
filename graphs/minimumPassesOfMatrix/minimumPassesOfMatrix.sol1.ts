// sol 1 - the "brute force" approach - just iterate over matrix's elements
// and convert all negative numbers to positive according to a rule:
// "if a negative number has a positive neighbour, convert it to positive"
// note: this approach is not efficient, it's just a starting point
// time complexity: 
// - we have to iterate over all elements of the matrix with each pass, whis is O(w * h)
// - the maximum number of passes is max(w, h), so the time complexity is O(w * h * max(w, h))
//   ... where w is the width of the matrix and h is the height of the matrix
export function minimumPassesOfMatrix(matrix: number[][]) {
  let passCounter = 0
  let negativeElementsRemaining = true

  while (negativeElementsRemaining) {
    const elementsToConvert: [number, number][] = []
    negativeElementsRemaining = false

    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < matrix[row].length; column++) {
        if (matrix[row][column] < 0) {
          negativeElementsRemaining = true

          if (canBeConverted(matrix, row, column)) {
            elementsToConvert.push([row, column])
          }
        }
      }
    }

    for (const [row, column] of elementsToConvert) {
      matrix[row][column] *= -1
    }

    if (!negativeElementsRemaining) {
      return passCounter
    }

    if (negativeElementsRemaining && elementsToConvert.length === 0) {
      return -1
    }

    passCounter += 1
  }
}

export function canBeConverted(matrix: number[][], row: number, column: number) {
  const neighbours = getNeighbours(matrix, row, column)

  for (const [neighbourRow, neighbourColumn] of neighbours) {
    if (matrix[neighbourRow][neighbourColumn] > 0) {
      return true
    }
  }

  return false
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
