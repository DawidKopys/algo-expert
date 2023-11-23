
export function getNthTriangularNumber(n: number): number {
  // base case
  if (n <= 1) {
    return n
  }
  
  // subproblem
  const prevNumber = getNthTriangularNumber(n-1)

  // use subproblem solution to solve current problem
  return prevNumber + n
}

// const n = 7
// const number = getNthTriangularNumber(n)
// console.log('number :', number)
