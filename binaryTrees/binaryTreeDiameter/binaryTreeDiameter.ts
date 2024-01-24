import { printBinaryTree2 } from '../util/printBinaryTree'

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

// TO JEST ZLE
// export function binaryTreeDiameter(tree: BinaryTree): number {
//   // base case
//   // no children
//   if (!tree.left && !tree.right) {
//     return 0
//   }

//   const leftSubtreeDiameter = tree.left ? binaryTreeDiameter(tree.left) + 1 : 0
//   const rightSubtreeDiameter = tree.right ? binaryTreeDiameter(tree.right) + 1 : 0

//   return leftSubtreeDiameter + rightSubtreeDiameter 
// }

type TreeInfo = {
  diameter: number
  height: number
}

// O(n) time, 0(h) space
export function binaryTreeDiameter(tree: BinaryTree): number {
  const treeInfo = getBinaryTreeInfo(tree)
  return treeInfo.diameter
}

// czyli rekurencyjnie - przy pomocy algorytmu Depth First Search - obliczamy kolejno (od leaf nodes do góry) diameter i height node'ów
// ... na podstawie height i diameter left i right subtrees aktualnego node'a
// w ten sposób niejako "przekazujemy height i diameter nizszycho node'ow do góry" - tak zeby przy pomocy tych danych móc obliczyc height i diameter aktualnego node'a
function getBinaryTreeInfo(tree: BinaryTree | null): TreeInfo {
  if (!tree) {
    return { diameter: 0, height: 0 }
  }

  const leftTreeInfo = getBinaryTreeInfo(tree.left)
  const rightTreeInfo = getBinaryTreeInfo(tree.right)

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter)
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar)
  const currentHeight = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1
  
  return {
    diameter: currentDiameter,
    height: currentHeight
  }
}

// const root = new BinaryTree(1)
// root.left = new BinaryTree(3)
// root.right = new BinaryTree(2)
// root.left.left = new BinaryTree(7)
// root.left.left.left = new BinaryTree(8)
// root.left.left.left.left = new BinaryTree(9)
// root.left.right = new BinaryTree(4)
// root.left.right.right = new BinaryTree(5)
// root.left.right.right.right = new BinaryTree(6)

// printBinaryTree2(root)
// const result = binaryTreeDiameter(root)
// console.log('result :', result) // expected 6

// const root2 = new BinaryTree(1)
// root2.left = new BinaryTree(3)
// root2.right = new BinaryTree(3)

// printBinaryTree2(root2)
// const result2 = binaryTreeDiameter(root2)
// console.log('result2 :', result2) // expected 1
