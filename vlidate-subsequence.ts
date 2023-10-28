const array = [5, 1, 22, 25, 6, -1, 8, 10]
const subsequence = [1, 6, -1, 10]
const notSubsequence = [1, 3, 22, 24, 9]

// sol 1 - two cursors
// O(n) time, O(1) space - where n is the length of the array
export function isValidSubsequence(array: number[], sequence: number[]) {
  let j = 0
  let i = 0

  while (i < array.length && j < sequence.length) {
    if (array[i] === sequence[j]) {
      // match - increment both counters
      i++
      j++
    } else {
      // no match - increment i
      i++
    }
  }

  return j === sequence.length
}


const result1 = isValidSubsequence(array, subsequence)
const result2 = isValidSubsequence(array, notSubsequence)

console.log('result1 :', result1)
console.log('result2 :', result2)
