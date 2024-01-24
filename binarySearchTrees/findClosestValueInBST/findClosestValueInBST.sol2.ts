import { printBinaryTree2 } from '../util/printBinaryTree'

class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// sol2 - recursive
// time O(log(n))
// space O(log(n))
export function findClosestValueInBst(tree: BST, target: number): number {
  return _findClosestValueInBst(tree, target, tree.value)
}

function _findClosestValueInBst(tree: BST | null, target: number, closestValue: number): number {
  if (tree === null) return closestValue

  const currentDiff = Math.abs(closestValue - target)
  const newDiff = Math.abs(tree.value - target)

  if (newDiff < currentDiff) {
    closestValue = tree.value
  }

  if (target < tree.value) { 
    return _findClosestValueInBst(tree.left, target, closestValue)
  } else if (target > tree.value) {
    return _findClosestValueInBst(tree.right, target, closestValue)
  }
  // target === tree.value
  return target
}

// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(13)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)
// printBinaryTree2(tree)

// const result = findClosestValueInBst(tree, 12)
// console.log('result :', result)
