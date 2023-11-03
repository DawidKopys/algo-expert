// sol1 - with temp, without swap
export function insertionSort(array: number[]) {
  for (let sortedEndIndex = 0; sortedEndIndex < array.length - 1; sortedEndIndex++) {
    // shifting phase
    let holeIndex = sortedEndIndex + 1
    const temp = array[holeIndex]
    let shifted = true

    // shift as many elements as needed
    while (holeIndex > 0 && shifted) {
      if (array[holeIndex - 1] > temp) {
        shiftRight(array, holeIndex - 1)
        holeIndex--
      } else {
        shifted = false
      }
    }

    // put temp back into the "hole"
    array[holeIndex] = temp
  }

  return array
}

function shiftRight(array: number[], index: number) {
  array[index + 1] = array[index]
}
