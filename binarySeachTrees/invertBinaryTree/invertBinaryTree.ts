import { printBinaryTree2 } from '../util/printBinaryTree'

class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// to było mega łatwe więc wyjebane na testy
// O(n) time
// O(h) space - bo w jednym momencie, maksymalnie na callstacku mamy h wywołań funkcji invertBinaryTree
// ... bo zanim przerobimy prawy child, musimy skonczyc lewe subtree itp
export function invertBinaryTree(tree: BinaryTree | null) {
  if (!tree) {
    return
  }

  [tree.left, tree.right] = [tree.right, tree.left]
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

const root = new BinaryTree(1)
root.left = new BinaryTree(2)
root.right = new BinaryTree(3)
root.left.left = new BinaryTree(4)
root.left.right = new BinaryTree(5)
root.right.left = new BinaryTree(6)
root.right.right = new BinaryTree(7)
root.left.left.left = new BinaryTree(8)
root.left.left.right = new BinaryTree(9)

printBinaryTree2(root)

invertBinaryTree(root)

printBinaryTree2(root)