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

// sol 3 - from algo, 
// based on level-order serach / breadth first search / bfs
// we merge into tree1
// O(n) time
// O(h) space
export function mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null) {
  // edge case
  if (tree1 === null) return tree2
  
  const tree1Queue: (BinaryTree)[] = []
  const tree2Queue: (BinaryTree | null)[] = []
  tree1Queue.push(tree1)
  tree2Queue.push(tree2)

  while (tree1Queue.length > 0) {
    const tree1Node = tree1Queue.pop()!
    const tree2Node = tree2Queue.pop()

    if (tree2Node === null) continue

    tree1Node.value = tree1Node.value + tree2Node!.value

    if (tree1Node.left === null) {
      tree1Node.left = tree2Node!.left
    } else {
      tree1Queue.push(tree1Node.left)
      tree2Queue.push(tree2Node!.left)
    }
    
    if (tree1Node.right === null) {
      tree1Node.right = tree2Node!.right
    } else {
      tree1Queue.push(tree1Node.right)
      tree2Queue.push(tree2Node!.right)
    }
  }

  return tree1
}

// console.log('tree 1:')
// const r1 = new BinaryTree(1)
// r1.left = new BinaryTree(3)
// r1.right = new BinaryTree(2)
// r1.left.left = new BinaryTree(7)
// r1.left.right = new BinaryTree(4)
// printBinaryTree2(r1)

// console.log('tree 2:')
// const r2 = new BinaryTree(1)
// r2.left = new BinaryTree(5)
// r2.right = new BinaryTree(9)
// r2.left.left = new BinaryTree(2)
// r2.right.left = new BinaryTree(7)
// r2.right.right = new BinaryTree(6)
// printBinaryTree2(r2)

// mergeBinaryTrees(r1, r2)
// printBinaryTree2(r1)
