const inputArray = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

// sol 1: n^2 iteracji dodanie kazdej liczby z każdą i zobaczenie czy ich suma to target sum
// O(n^2) time, O(1) space
export function twoNumberSum(array: number[], targetSum: number) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j]
      if (sum === targetSum) {
        return [array[i], array[j]]
      }
    }
  }
  
  return [];
}


const result = twoNumberSum(inputArray, targetSum)
console.log('result :', result)
