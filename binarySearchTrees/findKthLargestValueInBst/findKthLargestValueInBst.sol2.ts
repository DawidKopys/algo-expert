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


// sol 2 - reverse inorder traverse
// space O(h + k)
// time O(k)
type TreeInfo = {
  numberOfVisitedNodes: number
  latestVisitedNodeValue: number
}

export function findKthLargestValueInBst(tree: BST, k: number) {
  const treeInfo: TreeInfo = {
    numberOfVisitedNodes: 0,
    latestVisitedNodeValue: -1
  }
  reverseInOrderTraverse(tree, k, treeInfo)
  return treeInfo.latestVisitedNodeValue
}

function reverseInOrderTraverse(tree: BST | null, k: number, treeInfo: TreeInfo) {
  if (tree === null || treeInfo.numberOfVisitedNodes >= k) return

  reverseInOrderTraverse(tree.right, k, treeInfo)

  if (treeInfo.numberOfVisitedNodes < k) {
    // visit
    treeInfo.latestVisitedNodeValue = tree.value
    treeInfo.numberOfVisitedNodes += 1

    reverseInOrderTraverse(tree.left, k, treeInfo)
  }
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

// const result = findKthLargestValueInBst(root, 3)
// console.log('result :', result)
