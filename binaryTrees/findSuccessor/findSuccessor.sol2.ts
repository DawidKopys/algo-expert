import { printBinaryTree2 } from '../util/printBinaryTree'

export class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
  parent: BinaryTree | null

  constructor(value: number, parent: BinaryTree | null = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = parent
  }
}

// sol 2 - two cases:
// a) node has right subtree -> return leftmost child
// b) node has no right subtree -> return "rightmost parent" - the ancestor that contains the node in its left subtree
// time O(h), space O(1)
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  // if node has a right subtree, then the successor is the leftmost child of the right subtree
  if (node.right) {
    return getLeftmostChild(node.right)
  }
  // if node does not have a right subtree,
  // ... then the successor is the first ancestor that is a left child of its parent
  // rightmost parent is the ancestor that contains the node in its left subtree
  return getRightmostParent(node)
}

function getLeftmostChild(node: BinaryTree): BinaryTree | null {
  let currentNode: BinaryTree = node
  while (currentNode.left) {
    currentNode = currentNode.left
  }
  return currentNode
}

function getRightmostParent(node: BinaryTree): BinaryTree | null {
  let currentNode: BinaryTree = node
  let prevNode: BinaryTree | null = null

  while (currentNode.parent) {
    prevNode = currentNode
    currentNode = currentNode.parent

    // check if the last "turn" was to the "right"
    if (currentNode.left === prevNode) {
      return currentNode
    }
  }

  return null
}

// test 2
// const root = new BinaryTree(1)
// root.left = new BinaryTree(2, root)
// root.right = new BinaryTree(3, root)
// root.left.left = new BinaryTree(4, root.left)
// root.left.right = new BinaryTree(5, root.left)
// root.left.left.left = new BinaryTree(6, root.left.left)

// printBinaryTree2(root)
// const result = findSuccessor(root, root.left.right)
// console.log('result?.value :', result?.value) // expected 1

// test 3
// const root2 = new BinaryTree(1)
// root2.left = new BinaryTree(3)
// root2.right = new BinaryTree(3)

// printBinaryTree2(root2)
// const result2 = findSuccessor(root2, root2)
// console.log('result2 :', result2) // expected 3
