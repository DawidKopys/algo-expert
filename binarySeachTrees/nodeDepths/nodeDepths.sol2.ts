import { printBinaryTree2 } from '../util/printBinaryTree'

// This is the class of the input binary tree.
class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export function nodeDepths(node: BinaryTree | null, depth = 0): number {
  if (!node) {
    return 0
  }
  return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
}

// const root = new BinaryTree(1)
// root.left = new BinaryTree(2)
// root.right = new BinaryTree(3)
// root.left.left = new BinaryTree(4)
// root.left.right = new BinaryTree(5)
// root.left.left.left = new BinaryTree(8)
// root.left.left.right = new BinaryTree(9)
// root.right.left = new BinaryTree(6)
// root.right.right = new BinaryTree(7)

// printBinaryTree2(root)

// const result = nodeDepths(root)
// console.log('result :', result)
