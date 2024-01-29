import { printBinaryTree2 } from "../util/printBinaryTree"


export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value)
      } else {
        this.right.insert(value)
      }
    }
  }
}

// sol1 - initial solution to improve on
export function minHeightBst(array: number[]) {
  const correctOrderArray: number[] = []
  _minHeightBst(array, correctOrderArray)
  console.log('correctOrderArray :', correctOrderArray)

  const tree = new BST(correctOrderArray.shift()!)
  for (const value of correctOrderArray) {
    tree.insert(value)
  }
  return tree
}

function _minHeightBst(array: number[], newArray: number[]) {
  // base case
  if (array.length === 0) {
    return
  }
  if (array.length === 1) {
    newArray.push(array[0])
    return
  }
  
  const middleElementIdx = Math.floor(array.length / 2)
  const middleElement = array[middleElementIdx]

  newArray.push(middleElement)

  const leftSubarray = array.slice(0, middleElementIdx)
  const rightSubarray = array.slice(middleElementIdx + 1)
  _minHeightBst(leftSubarray, newArray)
  _minHeightBst(rightSubarray, newArray)
}

const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
const bst = minHeightBst(arr)
printBinaryTree2(bst)
