
export function findXIndex(str: string): number {
  // base case
  if (str[0] === 'x') {
    return 0
  }

  // subproblem
  const idx = findXIndex(str.slice(1)) + 1

  // use subproblem solution to solve current problem
  return idx
}

// const str = 'abcdefghijklmnopqrstuvwxyz'
// const index = findXIndex(str)
// console.log('index :', index)
