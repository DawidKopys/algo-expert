// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.

import { printBinaryTree2 } from "./util/printBinaryTree"

export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number): BST {
    let currentNode: BST | null = this

    // find appropriate place to insert our node
    while (currentNode) {
      if (value >= currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = new BST(value)
          break
        }
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new BST(value)
          break
        }
        currentNode = currentNode.left
      }
    }

    return this
  }

  contains(value: number) {
    let currentNode: BST | null = this

    while (currentNode) {
      if (currentNode.value === value) {
        return true
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value < currentNode.value) {
        currentNode = currentNode.left
      }
    }

    return false
  }

  remove(value: number): BST {
    if (this.left !== null || this.right !== null) {
      const result = this.#remove(value, this)

      // we have to handle the case when we remove the root node      
      // ... and the root node has only one child node
      // I'm not a fan of this solution - it's not elegant - but it works
      if (result) {
        this.value = result.value
        this.left = result.left
        this.right = result.right
      }
    }

    return this
  }

  #remove(valueToRemove: number, node: BST | null): BST | null {
    if (node === null) return null

    if (valueToRemove < node.value) {
      console.log('valueToRemove < node.value')
      node.left = this.#remove(valueToRemove, node.left)
      return node
    }

    if (valueToRemove > node.value) {
      console.log('valueToRemove > node.value')
      node.right = this.#remove(valueToRemove, node.right)
      return node
    }
    console.log('valueToRemove === node.value')

    // valueToRemove === node.value -> we found the node we want to remove
    // no child nodes - just remove the node
    if (node.left === null && node.right === null) return null
    // one child node - replace node to remove with the only child
    if (node.left === null) return node.right
    if (node.right === null) return node.left

    // two child nodes:
    // find successor node - leftmost node in the right subtree
    const successor = findLeftmost(node.right)
    // replace node with successor
    node.value = successor.value
    // delete successor
    node.right = this.#remove(successor.value, node.right)
    return node
  }
}

function findLeftmost(node: BST): BST {
  let currentNode = node
  while (currentNode.left) {
    currentNode = currentNode.left
  }
  return currentNode
}

// test 1
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(13)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)

// printBinaryTree2(tree)
// tree.insert(12)
// console.log('tree.insert(12)')
// printBinaryTree2(tree)

// console.log('tree.contains(15) :', tree.contains(15))
// console.log('tree.contains(999) :', tree.contains(999))

// console.log('tree.remove(10)')
// tree.remove(10)
// printBinaryTree2(tree)


// test 2
const tree = new BST(1)
tree.insert(-1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
printBinaryTree2(tree)

tree.remove(1)
// tree.remove(2)
// tree.remove(3)
printBinaryTree2(tree)
