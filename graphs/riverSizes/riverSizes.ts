// sol 1 - my "brute force?" solution, see sol2 for way more elegant solution
// O(n) time, O(n) space
export function riverSizes(matrix: number[][]) {
  // each element of below array represents a single river
  // and for each element making up this river, we store its coordinates
  type RiverPart = [number, number] // [rowIndex, columnIndex]
  type River = RiverPart[]
  let rivers: (River | null)[] = [] // rivers elements
  // const rivers: number[] = [] // rivers lengths
  // below map maps element "coordinates" - string (in form of "rowIndex,columnIndex") - to river index in above array - number
  const elementToRiverMap = new Map<
    string,
    { riverIndex: number }
  >()

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      const currentElement = matrix[rowIdx][columnIdx]

      if (!isRiver(currentElement)) {
        continue
      }

      const topNeighbourIsRiver =
        rowIdx !== 0 && isRiver(matrix[rowIdx - 1][columnIdx])
      const leftNeighbourIsRiver =
        columnIdx !== 0 && isRiver(matrix[rowIdx][columnIdx - 1])

      if (!topNeighbourIsRiver && !leftNeighbourIsRiver) {
        // current element is beginning of a new river
        // create new river and add currentElement to it
        rivers.push([[rowIdx, columnIdx]])
        elementToRiverMap.set(`${rowIdx},${columnIdx}`, {
          riverIndex: rivers.length - 1
        })
        continue
      }

      if (topNeighbourIsRiver && leftNeighbourIsRiver) {
        // currentElement is a part of a river, that MIGHT not be "merged" yet
        // so, its either:
        // a) part of a river that is not connected yet - we have to connect it
        // b) part of a river that is already connected - we don't have to connect it
        const { riverIndex: river1Index } =
          elementToRiverMap.get(`${rowIdx - 1},${columnIdx}`)!
        const { riverIndex: river2Index } =
          elementToRiverMap.get(`${rowIdx},${columnIdx - 1}`)!

        // b: both neighbour river elements are parts of the same river
        if (river1Index === river2Index) {
          // ... just add current element to this river
          rivers[river1Index]!.push([rowIdx, columnIdx])
          elementToRiverMap.set(`${rowIdx},${columnIdx}`, { riverIndex: river1Index })
          continue
        }

        // a: neighbour river elements are parts of different rivers (not merged yet)
        // ... merge them
        const mergedRiver = [...rivers[river1Index]!, ...rivers[river2Index]!, [rowIdx, columnIdx] as [number, number]]
        rivers[river1Index] = mergedRiver
        rivers[river2Index] = null

        mergedRiver.forEach(([riverPartRow, riverPartColumn]) => {
          elementToRiverMap.set(`${riverPartRow},${riverPartColumn}`, {
            riverIndex: river1Index
          })
        })
        continue
      }

      // topNeighbourIsRiver || leftNeighbourIsRiver
      // currentElement is a continuation of single existing river
      // ... add current element to this river
      const [riverNeighbourRow, riverNeighbourColumn] = topNeighbourIsRiver
        ? [rowIdx - 1, columnIdx]
        : [rowIdx, columnIdx - 1]

      let { riverIndex } = elementToRiverMap.get(
        `${riverNeighbourRow},${riverNeighbourColumn}`
      )!

      rivers[riverIndex]!.push([rowIdx, columnIdx])
      elementToRiverMap.set(`${rowIdx},${columnIdx}`, { riverIndex: riverIndex })
    }
  }

  return rivers
    .filter((river): river is River => river !== null)
    .map((river) => river.length)
}

function isRiver(element: number) {
  return element === 1
}

// const matrix = [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0], // [1, 0, 1, 1, 0] it wouldn't work with this
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]
// const matrix = [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 1, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]
// const matrix = [
//   [1, 1],
//   [1, 1],
// ]
// const matrix = [
//   [1, 0, 0, 1],
//   [1, 0, 1, 0],
//   [0, 0, 1, 0],
//   [1, 0, 1, 0]
// ]
// const matrix = [
//   [1, 0, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]

// const result = riverSizes(matrix)
// console.log('result :', result)
