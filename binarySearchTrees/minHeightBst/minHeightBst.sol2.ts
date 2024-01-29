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

// sol 2 - improved solution 1 - build bst without additionall array
// time complexity
// BST insert has O(logN) time complexity
// ... we are calling insert() for each element in the input array
// so we have O(nlog(n)) time complexity
// ... and O(n) space complexity (for each node in BST)
// time complexity is further improved in sol 3 - as we don't use insert() method
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

  if (!bst) {
    bst = new BST(middleElement)
  } else {
    bst.insert(middleElement)
  }

  const leftSubarray = array.slice(0, middleElementIdx)
  const rightSubarray = array.slice(middleElementIdx + 1)
  _minHeightBst(leftSubarray, bst)
  _minHeightBst(rightSubarray, bst)
  return bst
}

const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22]
// const arr = [10, 5, 15, 2, 14, 1, 13, 7, 22] // hmmm, to wygląda jak algorytm partition!
const bst = minHeightBst(arr)
printBinaryTree2(bst)
