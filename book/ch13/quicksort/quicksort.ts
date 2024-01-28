import { partition } from '../partioning/partioning'

// quicksort - sorts array in place
export function quicksort(arr: number[], leftIndex = 0, rightIndex = arr.length - 1): number[] {
   // base case
  if (rightIndex - leftIndex <= 0) {
    // @ts-ignore
    return
  }

  // partition entire array
  const pivotIndex = partition(arr, leftIndex, rightIndex)

  // recursively sort (partition) left and right subarrays of pivot
  quicksort(arr, leftIndex, pivotIndex - 1)
  quicksort(arr, pivotIndex + 1, rightIndex)

  return arr
}

// const arr = [0, 5, 2, 1, 6, 3, 3, 3, 3, 9, -10]
// const result = quicksort(arr)
// console.log('result :', result)
