// approach 1 - nested loops with O(n^3) time complexity
export function threeSum(arr: number[]): number | null {
  if (arr.length < 3) {
    return null
  }

  // komncepcja - dodac kazda liczbe z kazda i zobaczyc czy suma jest wieksza od max
  let max = arr[0] + arr[1] + arr[2]

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const currentSum = arr[i] + arr[j] + arr[k]
        if (currentSum > max) {
          max = currentSum
        }
      }
    }
  }

  return max
}

// const arr = [10, 2, 3, 4, 1, 2, 3, -4, 1]
// const result = threeSum(arr)
// console.log('result :', result)
