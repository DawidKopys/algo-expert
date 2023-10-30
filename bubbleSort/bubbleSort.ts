// best: O(n) time, O(1) space
// average and worst: O(n^2) time, O(1) space
export function bubbleSort(array: number[]) {
  const sortedArr = [...array]
  let end = array.length - 1
  let sorted = false

  while (!sorted) {
    let i = 0
    sorted = true

    while (i < end) {
      if (sortedArr[i] > sortedArr[i + 1]) {
        swap(sortedArr, i, i + 1)
        sorted = false
      }
      i++
    }
    end--
  }

  return sortedArr
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
