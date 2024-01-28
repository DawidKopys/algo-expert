// sol 1 - sort and then iterate over - O(NlogN) time
export function findMissingNumber(arr: number[]): number {
  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i]) {
      return i
    }
  }

  return arr.length
}

// const arr = [0, 4, 1, 3]
// const result = findMissingNumber(arr)
// console.log('result :', result)
