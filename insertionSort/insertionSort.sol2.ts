// sol2 - without temp, with swap (kinda like reversed bubble sort)
export function insertionSort(array: number[]) {
  for (let sortedEndIndex = 0; sortedEndIndex < array.length - 1; sortedEndIndex++) {
    // shifting phase
    let holeIndex = sortedEndIndex + 1

    while (holeIndex > 0 && array[holeIndex - 1] > array[holeIndex]) {
      swap(array, holeIndex - 1, holeIndex)
      holeIndex--
    }
  }

  return array
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
