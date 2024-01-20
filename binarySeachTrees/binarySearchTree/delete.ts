import { Node } from '../node/Node'
import { binaryTreeToArr } from '../util/binaryTreeToArr'
import { printBinaryTree } from '../util/printBinaryTree'


// sol1 - with help of copilot
function deleteNode1(valueToDelete: number, node: Node | null): Node | null {
  if (!node) return null

  if (valueToDelete < node.value) {
    node.left = deleteNode1(valueToDelete, node.left)
    return node
  }

  if (valueToDelete > node.value) {
    node.right = deleteNode1(valueToDelete, node.right)
    return node
  }

  // valueToDelete === node.value
  // node has no children
  if (!node.left && !node.right) return null
  // node has one child
  if (!node.left) return node.right
  if (!node.right) return node.left

  // node has two children
  /* DIFFERENCE BETWEEN TWO SOLUTIONS */
  // find the minimum value in the right subtree - the successor
  const successorValue = findMinValue(node.right)
  // replace the node's value with the minimum value (the successor)
  node.value = successorValue
  // delete the successor from the right subtree - the successor can have either no child nodes or one right child node
  // (because it is the minimum value in the right subtree, if it had any left child nodes, the child node
  // ... would be the minimum value in the whole tree - the successor)
  node.right = deleteNode1(successorValue, node.right)
  return node
}

function findMinValue(node: Node): number {
  while (node.left) {
    node = node.left
  }
  return node.value
}


// sol2  - from the book
function deleteNode2(valueToDelete: number, node: Node | null): Node | null {
  if (!node) return null

  if (valueToDelete < node.value) {
    node.left = deleteNode2(valueToDelete, node.left)
    return node
  }

  if (valueToDelete > node.value) {
    node.right = deleteNode2(valueToDelete, node.right)
    return node
  }

  // valueToDelete === node.value
  // node has no children
  if (!node.left && !node.right) return null
  // node has one child
  if (!node.left) return node.right
  if (!node.right) return node.left

  // node has two children
  /* DIFFERENCE BETWEEN TWO SOLUTIONS */
  // if the node has two children, we delete the current node
  // by calling the lift function, which replaces the current
  // node's value with the value of its successor node
  node.right = lift(node.right, node)
  return node
}

function lift(node: Node, nodeToDelete: Node): Node | null {
  if (node.left) {
    node.left = lift(node.left, nodeToDelete)
    return node
  }

  // we found the successor node
  // replace the node's value with the successor node's value
  nodeToDelete.value = node.value
  // delete the successor node by returning its right child
  return node.right
}

export {
  deleteNode1,
  deleteNode2
}