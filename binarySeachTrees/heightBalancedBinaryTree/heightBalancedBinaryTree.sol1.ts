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

// checks if a tree is "height balanced", returns:
// - true - if the tree is height balanced
// - false - if the tree is not height balanced
// "a binary tree is height balanced if for each node in the tree, the difference in height of its
// left and right subtrees is no greater than 1"

// BAD SOLUTION - BAD PERFORMANCE
// O(n^2) ??? time (for sure worse than O(n))
// O(n^2) ??? time (for sure worse than O(n))
// sol 1 - use inorder search to visit each node in the tree and caluclate the difference in height of 
// ... its left and right subtrees
export function heightBalancedBinaryTree(tree: BinaryTree) {
  // we have to check the "balanced" condition for each node
  // we can use any of the tree traverse algorithms to visit each node
  let isBalanced = true

  inorderSearch(tree, (node: BinaryTree) => {
    const leftSubtreeHeight = getTreeHeight(node.left)
    const rightSubtreeHeight = getTreeHeight(node.right)

    const subtreesHeightDifference = Math.abs(
      leftSubtreeHeight - rightSubtreeHeight
    )
    
    if (subtreesHeightDifference > 1) {
      isBalanced = false
    }
  })

  return isBalanced
}

function inorderSearch(
  tree: BinaryTree | null,
  visit: (node: BinaryTree) => void
) {
  if (!tree) {
    return
  }
  inorderSearch(tree.left, visit)
  visit(tree)
  inorderSearch(tree.right, visit)
}

function getTreeHeight(tree: BinaryTree | null): number {
  // base case
  if (!tree) {
    return 0
  }

  // subproblem
  const leftSubtreeHeight = getTreeHeight(tree.left)
  const rightSubtreeHeight = getTreeHeight(tree.right)

  // use subproblem solution to solve our problem
  return 1 + Math.max(leftSubtreeHeight, rightSubtreeHeight)
}

// const inputTree = new BinaryTree(1)
// inputTree.left = new BinaryTree(2)
// inputTree.right = new BinaryTree(3)
// inputTree.left.left = new BinaryTree(4)
// inputTree.left.right = new BinaryTree(5)
// inputTree.right.right = new BinaryTree(6)
// inputTree.left.right.left = new BinaryTree(7)
// inputTree.left.right.right = new BinaryTree(8)

// printBinaryTree2(inputTree)

// const result = heightBalancedBinaryTree(inputTree)
// console.log('result :', result)

// const height = getTreeHeight(inputTree)
// console.log('height :', height)

// // test 2
// console.log()
// const inputTree2 = new BinaryTree(1)
// inputTree2.left = new BinaryTree(2)
// inputTree2.right = new BinaryTree(3)
// inputTree2.left.left = new BinaryTree(4)
// inputTree2.left.right = new BinaryTree(5)

// printBinaryTree2(inputTree2)

// const result2 = heightBalancedBinaryTree(inputTree2)
// console.log('result2 :', result2)

// const height2 = getTreeHeight(inputTree2)
// console.log('height2 :', height2)
