import { printBinaryTree2 } from '../util/printBinaryTree'

export class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export function splitBinaryTree(tree: BinaryTree) {
  const desiredSubtreeSum = getTreeSum(tree) / 2
  const canBeSlit = trySubtrees(tree, desiredSubtreeSum)[1]
  return canBeSlit ? desiredSubtreeSum : 0
}

function trySubtrees(tree: BinaryTree | null, desiredSubtreeSum: number): [number, boolean] {
  // base case
  if (!tree) return [0, false]

  // subproblems
  const [leftSum, leftCanBeSplit] = trySubtrees(tree.left, desiredSubtreeSum)
  const [rightSum, rightCanBeSplit] = trySubtrees(tree.right, desiredSubtreeSum)

  // use subproblems solutions to solve big problem
  const currentTreeSum = tree.value + leftSum + rightSum
  const canBeSlit = leftCanBeSplit || rightCanBeSplit || currentTreeSum === desiredSubtreeSum
  return [currentTreeSum, canBeSlit]
}

function getTreeSum(tree: BinaryTree | null): number {
  if (!tree) return 0
  return tree.value + getTreeSum(tree.left) + getTreeSum(tree.right)
}

// const r = new BinaryTree(1)
// r.left = new BinaryTree(3)
// r.right = new BinaryTree(-2)
// r.left.left = new BinaryTree(6)
// r.left.right = new BinaryTree(-5)
// r.left.left.left = new BinaryTree(2)
// r.right.left = new BinaryTree(5)
// r.right.right = new BinaryTree(2)

// printBinaryTree2(r)
// console.log('getTreeSum(r) :', getTreeSum(r))
