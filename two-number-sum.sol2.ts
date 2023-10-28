const inputArray = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

// sol 2 - jedna iteracja po arrayu + hash table
// O(n) time, O(n) space
export function twoNumberSum(array: number[], targetSum: number) {
  // w JSie sets (oraz maps) muszę spełniać wymaganie:
  // Set objects must be implemented using [mechanisms] that, on average,
  // ... provide access times that are sublinear on the number of elements in the collection.
  // czyli muszą mieć time complexity lepsze niz O(n), czyli O(logn) lub O(1)
  // ... dlatego w praktyce zwykle są zaimplementowane jako hash tables / search trees
  // source: https://stackoverflow.com/a/31092145
  // oraz: https://262.ecma-international.org/6.0/#sec-map-objects:~:text=Map%20object%20must%20be%20implemented%20using%20either%20hash%20tables
  const seen = new Set()

  for (let i = 0; i < array.length; i++) {
    const complement = targetSum - array[i]
    if (seen.has(complement)) {
      return [complement, array[i]]
    }
    seen.add(array[i])
  }
  
  return [];
}


const result = twoNumberSum(inputArray, targetSum)
console.log('result :', result)
