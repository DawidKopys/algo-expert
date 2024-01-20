import { printBinaryTree2 } from '../util/printBinaryTree'

// This is the class of the input binary tree.
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

type NodeWithDepth = {
  node: BinaryTree
  depth: number
}

export function nodeDepths(root: BinaryTree) {
  const queue: NodeWithDepth[] = []

  let depthsSum = 0
  queue.unshift({ node: root, depth: 0 }) // enqueue

  while (queue.length > 0) {
    const node = queue.pop()!
    depthsSum += node.depth

    if (node.node.left) {
      queue.unshift({ node: node.node.left, depth: node.depth + 1 })
    }
    if (node.node.right) {
      queue.unshift({ node: node.node.right, depth: node.depth + 1 })
    }
  }

  return depthsSum
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
