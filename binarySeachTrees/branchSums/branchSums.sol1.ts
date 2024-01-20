import { printBinaryTree2 } from '../util/printBinaryTree'

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// sol 1 - mine :D bottom-up
export function branchSums(root: BinaryTree): number[] {
  // base case
  if (!root.left && !root.right) {
    return [root.value]
  }

  // subproblem
  // find sums in the sub-branches
  const leftBranchSums = root.left ? branchSums(root.left) : []
  const rightBranchSums = root.right ? branchSums(root.right) : []

  // use subproblem solution to solve actual problem
  // concat left and right branches sums and add root node to them
  return [...leftBranchSums, ...rightBranchSums].map((sum) => sum + root.value)
}

// const root = new BinaryTree(1)
// root.left = new BinaryTree(2)
// root.right = new BinaryTree(3)
// root.left.left = new BinaryTree(4)
// root.left.right = new BinaryTree(5)
// root.left.left.left = new BinaryTree(8)
// root.left.left.right = new BinaryTree(9)
// root.left.right.left = new BinaryTree(10)
// root.right.left = new BinaryTree(6)
// root.right.right = new BinaryTree(7)

// printBinaryTree2(root)

// const result = branchSums(root)
// console.log('result :', result)
