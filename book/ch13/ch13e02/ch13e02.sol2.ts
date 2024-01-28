// sol 2 - calculate expected sum - O(N) time
export function findMissingNumber(arr: number[]): number {
  const expectedSum = ((0 + arr.length) / 2) * (arr.length + 1)  // suma ciągu arytmetycznego
  const sum = arr.reduce((acc, currentNumber) => acc + currentNumber, 0)
  return expectedSum - sum
}

// const arr = [0, 4, 1, 3, 5]
// const result = findMissingNumber(arr)
// console.log('result :', result)
