import { printBinaryTree2 } from "../util/printBinaryTree"

// This is an input class. Do not edit.
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

// sol 1 - the brute force approach: use reverse inorder traverse and add all nodes
// ... to an array, then return kth element from this array
// space O(n)
// time O(n)
// maybe we could improve the time if instead of constructing an array, we just keep track
// of an "index" and return node's value when we reach k?
export function findKthLargestValueInBst(tree: BST, k: number) {
  const arr = bstToArray(tree)!
  return arr[k - 1]
}

function bstToArray(tree: BST | null, arr: number[] = []) {
  if (tree === null) return
  bstToArray(tree.right, arr)
  arr.push(tree.value)
  bstToArray(tree.left, arr)
  return arr
}

// const root = new BST(15)
// root.left = new BST(5)
// root.left.left = new BST(2)
// root.left.right = new BST(5)
// root.left.left.left = new BST(1)
// root.left.left.right = new BST(3)
// root.right = new BST(20)
// root.right.left = new BST(17)
// root.right.right = new BST(22)
// printBinaryTree2(root)

// const arr = bstToArray(root)
// console.log('arr :', arr)

// const result = findKthLargestValueInBst(root, 3)
// console.log('result :', result)

