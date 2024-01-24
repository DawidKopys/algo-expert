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

// sol from algo expert with DFS, iterative
export function symmetricalTree(tree: BinaryTree): boolean {
  const leftStack = [tree.left]
  const rightStack = [tree.right]

  while (leftStack.length > 0) {
    const leftNode: BinaryTree | null = leftStack.pop()!
    const rightNode: BinaryTree | null = rightStack.pop()!

    if (leftNode === null && rightNode === null) continue

    if (leftNode === null || rightNode === null || leftNode.value !== rightNode.value) {
      return false
    }

    leftStack.push(leftNode.left)
    leftStack.push(leftNode.right)
    rightStack.push(rightNode.right)
    rightStack.push(rightNode.left)
  }

  return true
}

// const r = new BinaryTree(1)
// r.left = new BinaryTree(2)
// r.right = new BinaryTree(2)
// r.left.left = new BinaryTree(3)
// r.left.right = new BinaryTree(4)
// r.right.right = new BinaryTree(3)
// r.right.left = new BinaryTree(4)
// r.left.left.left = new BinaryTree(5)
// r.left.left.right = new BinaryTree(6)
// r.right.right.left = new BinaryTree(6)
// r.right.right.right = new BinaryTree(5)
// // r.right.right.right = new BinaryTree(2)

// printBinaryTree2(r)
// const result = symmetricalTree(r)
// console.log('result :', result)

