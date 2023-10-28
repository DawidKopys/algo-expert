const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33

// sol2 - recursive
// O(logN) time, O(logN) space
export function binarySearch(array: number[], target: number): number {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
): number {
  if (left > right) {
    return -1
  }
  const mid = Math.round((left + right) / 2)

  if (array[mid] > target) {
    return binarySearchHelper(array, target, left, mid - 1)
  } else if (array[mid] < target) {
    return binarySearchHelper(array, target, mid + 1, right)
  }
  return mid
}

const result = binarySearch(array, target)
console.log('result :', result)
