// approach 2 - sort array and use last 3 elements - O(NlogN) time
export function threeSum(arr: number[]): number | null {
  if (arr.length < 3) {
    return null
  }

  // komcepcja - dodac kazda liczbe z kazda i zobaczyc czy suma jest wieksza od max
  arr.sort((a, b) => a - b)
  return arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1]
}

// const arr = [10, 2, 3, 4, 1, 2, 3, -4, 1]
// const result = threeSum(arr)
// console.log('result :', result)
