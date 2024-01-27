import { printBinaryTree2 } from "../util/printBinaryTree";

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree === null) return array;

  inOrderTraverse(tree.left, array)
  array.push(tree.value)
  inOrderTraverse(tree.right, array)
  
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (tree === null) return array;

  // console.log('pushing:', tree.value)
  array.push(tree.value)
  preOrderTraverse(tree.left, array)
  preOrderTraverse(tree.right, array)
  
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree === null) return array;

  postOrderTraverse(tree.left, array)
  postOrderTraverse(tree.right, array)
  array.push(tree.value)
  
  return array;
}

// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// tree.left.left.left = new BST(1)
// tree.right.right = new BST(22)
// printBinaryTree2(tree)

// console.log('inorder:')
// const arr: number[] = []
// const result = inOrderTraverse(tree, arr)
// console.log('result :', result)

// console.log('preorder:')
// const arr2: number[] = []
// const result2 = preOrderTraverse(tree, arr2)
// console.log('result2 :', result2)

// console.log('postorder:')
// const arr3: number[] = []
// const result3 = postOrderTraverse(tree, arr3)
// console.log('resul3 :', result3)