export function powerset(array: number[]): number[][] {
  console.group(`powerset for ${array}`)
  // base case
  if (array.length === 0) {
    return [[]]
  }
  if (array.length === 1) {
    return [[array[0]], []]
  }

  // subproblem
  const ignoredElement = array[0]
  const sliceSubsets = powerset(array.slice(1))

  // use subproblem solution to solve actual problem
  const newSubsets = []
  for (const subset of sliceSubsets) {
    newSubsets.push([...subset, ignoredElement])
  }

  return [...sliceSubsets, ...newSubsets]
}

// const arr = [1, 2, 3]
// const result = powerset(arr)
// console.log('result.sort() :', result.sort())
// const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
// console.log('expected.sort() :', expected.sort())


// console.log('result :', result)
