
// nie podoba mi się to rowiązanie ... :/ - jest dla mnie niezrozumiałe
export function uniquePaths(rows: number, columns: number): number {
  // base case
  if (rows === 1 || columns === 1) {
    return 1
  }

  // subproblem(s)
  const rightSubgridUniquePaths = uniquePaths(rows - 1, columns)
  const bottomSubgridUniquePaths = uniquePaths(rows, columns - 1)

  // use subproblem solution to solve current problem
  return rightSubgridUniquePaths + bottomSubgridUniquePaths
}

// const rows = 3
// const columns = 7
// const paths = uniquePaths(rows, columns)
// console.log('paths :', paths)
