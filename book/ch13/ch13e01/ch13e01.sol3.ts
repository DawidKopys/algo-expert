// approach 3 - przechodzimy array raz i zapamietujemy 3 najwieksze liczby, potem je dodajemy
// ... chyba O(N) time complexity
export function threeSum(arr: number[]): number | null {
  if (arr.length < 3) {
    return null
  }

  const threeBiggestNumbers = [arr[0], arr[1], arr[2]]
  let smallestOfBiggestIndex = findSmallestNumberIndex(threeBiggestNumbers) as number

  for (let i = 3; i < arr.length; i++) {
    if (arr[i] > arr[smallestOfBiggestIndex]) {
      threeBiggestNumbers[smallestOfBiggestIndex] = arr[i]
      smallestOfBiggestIndex = findSmallestNumberIndex(threeBiggestNumbers) as number
    }
  }

  return threeBiggestNumbers[0] + threeBiggestNumbers[1] + threeBiggestNumbers[2]
}

// const arr = [10, 2, 3, 4, 1, 2, 3, -4, 1]
// const result = threeSum(arr)
// console.log('result :', result)

function findSmallestNumberIndex(numbers: number[]) {
  if (numbers.length === 0) {
    return null // Return null if the array is empty
  }

  let smallestIndex = 0 // Assume the first number is the smallest

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[smallestIndex]) {
      smallestIndex = i // Update the smallest number if a smaller number is found
    }
  }

  return smallestIndex
}
