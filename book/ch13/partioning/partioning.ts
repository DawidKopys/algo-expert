export function partition (arr: number[], leftIndex: number, rightIndex: number) {
  // for now, we always choose the right-most element as our pivot
  const pivotIndex = rightIndex

  rightIndex -= 1

  while (true) {
    // move left pointer
    while (arr[leftIndex] < arr[pivotIndex]) {
      leftIndex += 1
    }

    // move right pointer
    while (arr[rightIndex] > arr[pivotIndex]) {
      rightIndex -= 1
    }

    if (leftIndex >= rightIndex) {
      break
    }

    // swap left and right values, go back to step 1
    swap(arr, leftIndex, rightIndex)
    // needed to avoid infinite loop when left and right cursors both point to elements equal to pivot:
    leftIndex += 1
  }

  // swap pivot with the left value
  swap(arr, pivotIndex, leftIndex)
  
  // return leftIndex for quicksort later on
  return leftIndex
}

function swap(arr: any[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// const arr = [0, 1, 5, 2, 1, 6, 0, 3]
// // const arr = [0, 5, 2, 1, 6, 3]
// partition(arr, 0, arr.length - 1)
// console.log('arr :', arr)
