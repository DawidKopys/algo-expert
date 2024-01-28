import { partition } from '../partioning/partioning'

// quickselect - selection algorithm to find the kth smallest element in an unordered array
export function quickselect(
  arr: number[],
  k: number,
  leftIndex = 0,
  rightIndex = arr.length - 1
): number {
  // base case
  if (rightIndex - leftIndex <= 0) {
    return arr[leftIndex]
  }

  // partition entire array
  const pivotIndex = partition(arr, leftIndex, rightIndex)

  if (pivotIndex === k) {
    return arr[pivotIndex]
  }
  if (pivotIndex > k) {
    return quickselect(arr, k, leftIndex, pivotIndex - 1)
  }
  // else if pivotIndex < k
  return quickselect(arr, k, pivotIndex + 1, rightIndex)
}

// const arr = [0, 5, 2, 1, 6, 3, 3, 3, 3, 9, -10]
// const result = quickselect(arr, 0)
// console.log('result :', result)

// const arr = [43, 24, 37]
// const k = 0
// const result = quickselect(arr, k)
// console.log('result :', result)

// const arr = [8, 5, 2, 9, 7, 6, 3]
// const k = 2
// const result = quickselect(arr, k)
// console.log('result :', result)
