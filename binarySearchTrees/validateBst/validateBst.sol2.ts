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

// Binary Search Tree is a binary tree that additionally abides 2 following rules:
// 1. all nodes' left descendants are less than the value of the node itself
// 2. all nodes' right descendants are bigger than the value of the node itself


// sol2 - from algo-expoert, very cool and concise
export function validateBst(tree: BST): boolean {
  return _validateBst(tree, -Infinity, Infinity)
}

function _validateBst(tree: BST | null, minValue: number, maxValue: number): boolean {
  if (tree === null) {
    return true
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false
  }
  const isLeftSubtreeValid = _validateBst(tree.left, minValue, tree.value)
  const isRightSubtreeValid = _validateBst(tree.right, tree.value, maxValue)
  return isLeftSubtreeValid && isRightSubtreeValid
}

// test 1 - true
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// // tree.left.right = new BST(1)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(13)
// // tree.right.left = new BST(16)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 2 - false
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(1)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(16)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 3 - false
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// tree.right.right = new BST(22)
// tree.left.left.left = new BST(1)
// tree.left.right.right = new BST(11)

// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 4
// const tree = new BST(10)
// tree.left = new BST(9)
// tree.left.right = new BST(11)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)
