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

// sol 1 - perform inorder search, add all nodes to a set, then iterate through the set to find the successor
// time O(n) | space O(n)
// we are not using the parent property of the node
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
  const inorderNodes = new Set<BinaryTree>()
  inorderSearch(tree, inorderNodes)

  // console.log('nodes in order:', Array.from(inorderNodes).map((node) => node.value))

  let prevNode: BinaryTree | null = null
  for (const currentNode of inorderNodes) {
    if (prevNode === node) {
      return currentNode
    }
    prevNode = currentNode
  }
  return null
}

function inorderSearch(
  tree: BinaryTree | null,
  visitedNodes: Set<BinaryTree>
): BinaryTree | undefined {
  if (!tree) {
    return
  }

  inorderSearch(tree.left, visitedNodes)
  visitedNodes.add(tree) // visit node
  inorderSearch(tree.right, visitedNodes)
}

// test 1
// const root = new BinaryTree(1)
// root.left = new BinaryTree(2, root)
// root.right = new BinaryTree(3, root)
// root.left.left = new BinaryTree(4, root.left)
// root.left.right = new BinaryTree(5, root.left)
// root.left.left.left = new BinaryTree(6, root.left.left)

// printBinaryTree2(root)
// const result = findSuccessor(root, root.left.right)
// console.log('result?.value :', result?.value) // expected 1


// test 2
// const root2 = new BinaryTree(1)
// root2.left = new BinaryTree(3)
// root2.right = new BinaryTree(3)

// printBinaryTree2(root2)
// const result2 = findSuccessor(root2, root2)
// console.log('result2 :', result2) // expected 3
