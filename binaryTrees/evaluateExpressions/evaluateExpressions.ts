import { printBinaryTree2 } from '../util/printBinaryTree'

// This is the class of the input binary tree.
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

function add(a: number, b: number) {
  return a + b
}
function subtract(a: number, b: number) {
  return a - b
}
function divide(a: number, b: number) {
  if (b === 0) {
    throw Error("You can't divide by 0.")
  }
  return Math.trunc(a / b)
}
function multiply(a: number, b: number) {
  return a * b
}

const operationsMap = new Map([
  [-1, add],
  [-2, subtract],
  [-3, divide],
  [-4, multiply]
])

export function evaluateExpressionTree(tree: BinaryTree): number {
  // base case
  // ... leaf nodes will be non-negative integers
  if (tree.value >= 0) {
    return tree.value
  }

  const operation = operationsMap.get(tree.value)!

  // we use non-null assertions here since we know tree is not a leaf node
  return operation(
    evaluateExpressionTree(tree.left!),
    evaluateExpressionTree(tree.right!)
  )
}

// const root = new BinaryTree(-1)
// root.left = new BinaryTree(-2)
// root.right = new BinaryTree(-3)
// root.left.left = new BinaryTree(-4)
// root.left.right = new BinaryTree(2)
// root.left.left.left = new BinaryTree(2)
// root.left.left.right = new BinaryTree(3)
// root.right.left = new BinaryTree(8)
// root.right.right = new BinaryTree(3)

// printBinaryTree2(root)

// const result = evaluateExpressionTree(root)
// console.log('result :', result)

// const root2 = new BinaryTree(-3)
// root2.left = new BinaryTree(9)
// root2.right = new BinaryTree(-2)
// root2.right.left = new BinaryTree(4)
// root2.right.right = new BinaryTree(6)

// printBinaryTree2(root2)

// const result2 = evaluateExpressionTree(root2)
// console.log('result2 :', result2)
