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
