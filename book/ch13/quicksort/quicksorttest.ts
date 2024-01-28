export function quickSort(array: number[]) {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

export function quickSortHelper(array: number[], left: number, right: number): number[] | void {
  // base case
  if (right - left <= 0) {
    return
  }

  const pivotIndex = partition(array, left, right)

  // sort recursively left and right subarrays to the pivot
  quickSortHelper(array, left, pivotIndex - 1)
  quickSortHelper(array, pivotIndex + 1, right)

  return array
}

function partition(array: number[], left: number, right: number): number {
  // choose pivot
  const pivotIndex = right
  const pivot = array[pivotIndex]

  // right pointer should point at the item before the pivot
  right -= 1

  // pointers moving phase
  while(true) {
    // move left pointer
    while (array[left] < pivot) {
      left += 1
    }

    // move right pointer
    while (array[right] > pivot) {
      right -= 1
    }

    // if left pointer crossed right - we are done moving pointers
    if (left >= right) {
      break
    }

    // pointers haven't met yet - their elements are in wrong positions - swap them
    swap(array, left, right)
    left += 1 // increnent to avoid infinite loop
  }

  // swap left and pivot
  swap(array, left, pivotIndex)
  return left // return new pivot position
}

function swap(arr: any[], i: number, j: number): void {
  const temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}
