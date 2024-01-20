import { Node } from '../node/Node'
import { binaryTreeToArr } from '../util/binaryTreeToArr'
import { printBinaryTree, printBinaryTree2 } from '../util/printBinaryTree'

const root = new Node('Moby Dick')
root.left = new Node('Great Expectations')
root.left.left = new Node('Alice in Wonderland')
root.left.right = new Node('Lord of the Flies')
root.right = new Node('Robinson Crusoe')
root.right.left = new Node('Pride and Prejudice')
root.right.right = new Node('The Odyssey')

printBinaryTree2(root)

// inorder traverse
function traverseInorderAndPrint<T>(node: Node<T> | null) {
  if (!node) {
    return
  }
  traverseInorderAndPrint(node.left)
  console.log(node.value)
  traverseInorderAndPrint(node.right)
}

console.log()

console.log('inorder:')
traverseInorderAndPrint(root)


// preorder traverse
function traversePreorderAndPrint<T>(node: Node<T> | null) {
  if (!node) {
    return
  }
  console.log(node.value)
  traversePreorderAndPrint(node.left)
  traversePreorderAndPrint(node.right)
}

console.log()

console.log('preorder:')
traversePreorderAndPrint(root)

// postorder traverse
function traversePostorderAndPrint<T>(node: Node<T> | null) {
  if (!node) {
    return
  }
  traversePostorderAndPrint(node.left)
  traversePostorderAndPrint(node.right)
  console.log(node.value)
}

console.log()

console.log('postorder:')
traversePostorderAndPrint(root)