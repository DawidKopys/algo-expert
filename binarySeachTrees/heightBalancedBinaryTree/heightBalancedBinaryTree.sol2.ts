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

// sol 2 - calculate tree's height recursively, if any subtree is not balanced - return -1
// O(n) time
// O(h) space
export function heightBalancedBinaryTree(tree: BinaryTree | null): boolean {
  return checkHeight(tree) !== -1;
}

// this function checks height of a tree, it returns -1 if the tree is not balanced
function checkHeight(node: BinaryTree | null): number {
  if (node === null) {
    return 0;
  }

  const leftHeight = checkHeight(node.left);
  const rightHeight = checkHeight(node.right);

  if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
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
