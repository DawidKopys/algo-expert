import { printBinaryTree2 } from '../util/printBinaryTree'

export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Binary Search Tree is a binary tree that additionally abides 2 following rules:
// 1. all nodes' left descendants are less than the value of the node itself
// 2. all nodes' right descendants are bigger than the value of the node itself

// this solution doesn't work, for example for:
// 10
//  │   ┌── 11
//  └── 9
// export function validateBst(tree: BST): boolean {
//    // subproblem
//   const isCurrentNodeValid =
//     (!tree.left || tree.left.value < tree.value) &&
//     (!tree.right || tree.right.value >= tree.value)

//   const isLeftSubtreeValid = tree.left ? validateBst(tree.left) : true
//   const isRightSubtreeValid = tree.right ? validateBst(tree.right) : true

//   // use subproblems' solutins to solve big problem
//   return isCurrentNodeValid && isLeftSubtreeValid && isRightSubtreeValid
// }

// moze alternatywnie trzeba zaimplementować jakoś algorytm DFS i "przekazywać" do góry
// ... największą i najmniejszą wartość z subtree
// postorder search:

type TreeInfo = {
  isValid: boolean
  minValue: number
  maxValue: number
}

// sol1 - my solution, I like it
export function validateBst(tree: BST): boolean {
  return _validateBst(tree).isValid
}

function _validateBst(tree: null): null
function _validateBst(tree: BST): TreeInfo
function _validateBst(tree: BST | null): TreeInfo | null
function _validateBst(tree: BST | null): TreeInfo | null {
  if (tree === null) {
    return null
  }

  const leftSubtreeInfo = _validateBst(tree.left)
  const isLeftSubtreeValid = leftSubtreeInfo ? leftSubtreeInfo.isValid : true
  const rightSubtreeInfo = _validateBst(tree.right)
  const isRightSubtreeValid = rightSubtreeInfo ? rightSubtreeInfo.isValid : true

  // visit
  const isCurrentSubtreeValid =
    (leftSubtreeInfo === null || leftSubtreeInfo.maxValue < tree.value) &&
    (rightSubtreeInfo === null || rightSubtreeInfo.minValue >= tree.value)

  const minValueCandidates = [
    tree.value,
    leftSubtreeInfo?.minValue,
    rightSubtreeInfo?.minValue
  ].filter(<T>(value: T | undefined): value is T => value !== undefined)

  const maxValueCandidates = [
    tree.value,
    leftSubtreeInfo?.maxValue,
    rightSubtreeInfo?.maxValue
  ].filter(<T>(value: T | undefined): value is T => value !== undefined)

  const minValue = Math.min(...minValueCandidates)
  const maxValue = Math.max(...maxValueCandidates)

  return {
    isValid: isCurrentSubtreeValid && isLeftSubtreeValid && isRightSubtreeValid,
    minValue: minValue,
    maxValue: maxValue
  }
}

// test 1 - true
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// // tree.left.right = new BST(1)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(13)
// // tree.right.left = new BST(16)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 2 - false
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(1)
// tree.left.left.left = new BST(1)
// tree.right.left = new BST(16)
// tree.right.right = new BST(22)
// tree.right.left.right = new BST(14)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 3 - false
// const tree = new BST(10)
// tree.left = new BST(5)
// tree.right = new BST(15)
// tree.left.left = new BST(2)
// tree.left.right = new BST(5)
// tree.right.right = new BST(22)
// tree.left.left.left = new BST(1)
// tree.left.right.right = new BST(11)

// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)

// test 4
// const tree = new BST(10)
// tree.left = new BST(9)
// tree.left.right = new BST(11)
// printBinaryTree2(tree)

// const result = validateBst(tree)
// console.log('result :', result)
