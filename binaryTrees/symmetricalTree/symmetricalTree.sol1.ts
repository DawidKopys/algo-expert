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

// "naive" solution
export function symmetricalTree(tree: BinaryTree): boolean {
  const nodes1: number[] = []
  const nodes2: number[] = []
  inorderSearch(tree, false, nodes1)
  inorderSearch(tree, true, nodes2)
  
  // check if arrays are identical
  for (let i = 0; i < nodes1.length; i++) {
    if (nodes1[i] !== nodes2[i]) {
      return false
    }
  }
  return true
}

function inorderSearch(tree: BinaryTree | null, reversed: boolean, nodes: number[]): void {
  if (!tree) return
  inorderSearch(reversed ? tree.right : tree.left, reversed, nodes)
  nodes.push(tree.value)
  inorderSearch(reversed ? tree.left : tree.right, reversed, nodes)
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

// printBinaryTree2(r)
// const result = symmetricalTree(r)
// console.log('result :', result)
