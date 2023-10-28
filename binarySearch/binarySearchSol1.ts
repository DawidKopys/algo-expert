const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33

// sol1 - iterative
// O(logN) time, O(1) space
export function binarySearch(array: number[], target: number): number {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.round((left + right) / 2 )

    if (array[mid] > target) {
      right = mid - 1
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

const result = binarySearch(array, target)
console.log('result :', result)
