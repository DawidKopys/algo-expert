const inputArray = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

// sol 3 - sortowanie arraya + "lewy" i "prawy" kursor
// O(log(n)) time, O(1) space
// the same logic can be applied to three-number-sum <- todo: check it out
export function twoNumberSum(array: number[], targetSum: number) {
  // good sorting algorithms will take O(nlog(n)) time
  // then, with the array sorted, we can find the result in O(n) time
  // ... which leaves us with O(nlog(n)) time complexity
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1
  
  while (left < right) {
    const sum = array[left] + array[right]
    if (sum === targetSum) {
      return [array[left], array[right]]
    }
    if (sum < targetSum) {
      left = left + 1
    }
    else {
      right = right - 1
    }
  }
  
  return [];
}


const result = twoNumberSum(inputArray, targetSum)
console.log('result :', result)
