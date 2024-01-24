import { printBinaryTree2 } from '../util/printBinaryTree'

export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// sol1 - iterative
// time O(log(n))
// space O(1)
export function findClosestValueInBst(tree: BST, target: number) {
  let currentNode: BST | null = tree
  let closestNode: BST = tree
  let minDiff = Math.abs(currentNode.value - target)

  while (currentNode) {
    if (target === currentNode.value) {
      return target
    }

    const diff = Math.abs(currentNode.value - target)
    if (diff < minDiff) {
      minDiff = diff
      closestNode = currentNode
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left
    } else if (target > currentNode.value) {
      currentNode = currentNode.right
    }
  }

  return closestNode.value
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
