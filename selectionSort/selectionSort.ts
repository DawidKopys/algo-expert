// O(n^2) time, O(1) space
export function selectionSort(array: number[]) {
  for (let startIndex = 0; startIndex < array.length - 1; startIndex++) {
    let minIndex = startIndex

    // find new minIndex
    for (let i = startIndex + 1; i < array.length; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i
      }
    }

    if (startIndex !== minIndex) {
      swap(array, startIndex, minIndex)
    }
  }

  return array
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
