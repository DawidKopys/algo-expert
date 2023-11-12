// sol 2 - using nested loops with O(N^2) time complexity
export function findDuplicate(array: string[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[i] === array[j]) {
        return array[i]
      } 
    }
  }

  return null
}
