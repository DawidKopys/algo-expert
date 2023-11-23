
export function getEvenNumbers(arr: number[]): number[] {
  // base case
  if (arr.length === 0) {
    return []
  }

  if (arr.length === 1) {
    return arr[0] % 2 === 0 ? [ arr[0] ] : []
  }

  // subproblem
  const evenNumbersSlice = getEvenNumbers(arr.slice(1))

  // use subproblem solution to solve current problem
  return arr[0] % 2 === 0 ? [ arr[0], ...evenNumbersSlice ] : [ ...evenNumbersSlice]
}

// const arr = [1, 2, 3, 4, 5, 6, 8, 10, 7]
// const evenNumbers = getEvenNumbers(arr)
// console.log('evenNumbers :', evenNumbers)
