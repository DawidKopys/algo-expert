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

// sol 3 - improved solution 2 - optimize time complexity by not using BST insert method
// O(n) time complexity
// O(n) space complexity
export function minHeightBst(array: number[]): BST {
  const tree = _minHeightBst(array)!
  return tree
}

function _minHeightBst(array: number[], bst?: BST) {
  // base case
  if (array.length === 0) {
    return
  }
  
  const middleElementIdx = Math.floor(array.length / 2)
  const middleElement = array[middleElementIdx]

  const newNode = new BST(middleElement)
  if (!bst) {
    bst = newNode
  } else {
    if (middleElement < bst.value) {
      bst.left = newNode
      bst = bst.left
    } else {
      bst.right = newNode
      bst = bst.right
    }
  }

  const leftSubarray = array.slice(0, middleElementIdx)
  const rightSubarray = array.slice(middleElementIdx + 1)
  _minHeightBst(leftSubarray, bst)
  _minHeightBst(rightSubarray, bst)
  return bst
}




const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
const bst = minHeightBst(arr)
printBinaryTree2(bst)
