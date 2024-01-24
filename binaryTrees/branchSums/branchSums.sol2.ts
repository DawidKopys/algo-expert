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

// sol2 - from algo expert, up-bottom
export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = []
  _branchSums(root, 0, sums)
  return sums
}

function _branchSums(root: BinaryTree | null, runningSum: number, sumsAcc: number[]): undefined {
  if (!root) {
    return
  }

  runningSum += root.value
  // we reached a leaf node
  if (!root.left && !root.right) {
    sumsAcc.push(runningSum)
    return
  }

  // not a leaf node yet - keep adding to sum
  _branchSums(root.left, runningSum, sumsAcc)
  _branchSums(root.right, runningSum, sumsAcc)
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
