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

// sol from algo expoert
export function symmetricalTree(tree: BinaryTree): boolean {
  return areTreesMirrored(tree.left, tree.right)
}

function areTreesMirrored(left: BinaryTree | null, right: BinaryTree | null): boolean {
  if (left !== null && right !== null && left.value === right.value) {
    return areTreesMirrored(left.left, right.right) && areTreesMirrored(left.right, right.left)
  }

  return left === right
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

