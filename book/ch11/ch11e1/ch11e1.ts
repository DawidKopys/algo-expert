
export function countCharacters(arr: string[]): number {
  if (arr.length === 0) {
    return 0
  }

  // base case
  if (arr.length === 1) {
    return arr[0].length
  }

  // subproblem
  const subCount = countCharacters(arr.slice(1))

  // use subproblem solution to solve current problem
  return subCount + arr[0].length
}

// const arr = ['ab', 'c', 'def', 'ghij']
// const charCount = countCharacters(arr)
// console.log('charCount :', charCount)
