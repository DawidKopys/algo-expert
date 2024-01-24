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

// sol 2 - from algo, fajne clean
// postorder traversal
// we merge into tree1
// O(n) time
// O(h) space
export function mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null): BinaryTree | null {
  if (!tree1) return tree2
  if (!tree2) return tree1

  tree1.value = tree1.value + tree2.value
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left)
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right)
  return tree1
}

// console.log('tree 1:')
// const r1 = new BinaryTree(1)
// r1.left = new BinaryTree(3)
// r1.right = new BinaryTree(2)
// r1.left.left = new BinaryTree(7)
// r1.left.right = new BinaryTree(4)
// printBinaryTree2(r1)

// console.log('tree 2:')
// const r2 = new BinaryTree(1)
// r2.left = new BinaryTree(5)
// r2.right = new BinaryTree(9)
// r2.left.left = new BinaryTree(2)
// r2.right.left = new BinaryTree(7)
// r2.right.right = new BinaryTree(6)
// printBinaryTree2(r2)

// const result = mergeBinaryTrees(r1, r2)
// printBinaryTree2(r1)
// printBinaryTree2(result)

