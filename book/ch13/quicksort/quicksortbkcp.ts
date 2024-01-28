import { partition } from '../partioning/partioning'

// quicksort - sorts array in place
export function quicksort(arr: number[], leftIndex = 0, rightIndex = arr.length - 1): number[] {
  // for debug
  const dbgArr = [...arr]
  console.group('quicksort for arr: ', dbgArr)
  
  // base case
  if (rightIndex - leftIndex <= 0) {
    console.log('... end for arr: ', dbgArr)
    console.groupEnd()
    // @ts-ignore
    return
  }

  // partition entire array
  const pivotIndex = partition(arr, leftIndex, rightIndex)
  console.log('pivotIndex :', pivotIndex)
  console.log('arr[pivotIndex] :', arr[pivotIndex])

  // recursively sort (partition) left and right subarrays of pivot
  quicksort(arr, leftIndex, pivotIndex - 1)
  quicksort(arr, pivotIndex + 1, rightIndex)
  // quicksort(arr.slice(0, pivotIndex))
  // quicksort(arr.slice(pivotIndex + 1, arr.length + 1))

  console.log('... end for arr: ', dbgArr)
  console.groupEnd()
  return arr
}

// const arr = [0, 5, 2, 1, 6, 3]
// const expectedSorted = [...arr].sort()
// const result = quicksort(arr)
// console.log('result :', result)
