import { printBinaryTree2 } from '../util/printBinaryTree'

// This is an input class. Do not edit.
export class BST {
  value: number
  left: BST | null
  right: BST | null

  constructor(
    value: number,
    left: BST | null = null,
    right: BST | null = null
  ) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export function reconstructBst(preOrderTraversalValues: number[]): BST | null {
  if (preOrderTraversalValues.length === 0) {
    return null
  }

  const rootValue = preOrderTraversalValues[0]
  const tree = new BST(rootValue)
  const valuesWithoutRoot = preOrderTraversalValues.slice(1)

  const rightChildIdx = valuesWithoutRoot.findIndex(
    (value) => value >= rootValue
  )
  
  const leftSubtreeNodes =
    rightChildIdx === -1
      ? valuesWithoutRoot
      : valuesWithoutRoot.slice(0, rightChildIdx)

  const rightSubtreeNodes =
    rightChildIdx === -1 ? [] : valuesWithoutRoot.slice(rightChildIdx)


  tree.left = reconstructBst(leftSubtreeNodes)
  tree.right = reconstructBst(rightSubtreeNodes)

  return tree
}

const arr = [10, 4, 2, 1, 5, 17, 19, 18]
const result = reconstructBst(arr)
printBinaryTree2(result)
