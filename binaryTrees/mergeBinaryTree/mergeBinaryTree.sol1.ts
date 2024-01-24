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

type ParentInfo = {
  parent: BinaryTree,
  side: 'left' | 'right'
}

// my sol1 - takie sobie ale działa, sol2 wydaje się "cleaner"
// postorder traversal
// we merge into tree1
// O(n) time
// O(h) space
export function mergeBinaryTrees(tree1: BinaryTree, tree2: BinaryTree) {
  _mergeBinaryTrees(tree1, tree2, null)
  return tree1
}

function _mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null, parentInfo: ParentInfo | null) {
  if (!tree2) {
    return
  }

  // visit
  if (!tree1) {
    // tree1 doesn't have a node and tree2 does have a node - copy node from tree2 into tree1
    if (!parentInfo) {
      tree1 = new BinaryTree(tree2.value)
    } else {
      const { parent, side } = parentInfo
      parent[side] = new BinaryTree(tree2.value)
      tree1 = parent[side]!
    }
  } else {
    tree1.value = tree1.value + tree2.value
  }

  _mergeBinaryTrees(tree1.left, tree2.left, { parent: tree1, side: 'left' })
  _mergeBinaryTrees(tree1.right, tree2.right, { parent: tree1, side: 'right' })
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

