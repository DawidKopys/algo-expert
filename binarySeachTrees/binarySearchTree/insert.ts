import { Node } from '../node/Node'
import { binaryTreeToArr } from '../util/binaryTreeToArr'
import { printBinaryTree } from '../util/printBinaryTree'

function insert(value: number, node: Node) {
  if (node.value > value) {
    if (!node.left) {
      node.left = new Node(value)
    } else {
      insert(value, node.left)
    }
  } else if (node.value < value) {
    if (!node.right) {
      node.right = new Node(value)
    } else {
      insert(value, node.right)
    }
  }
}

// test 1 - full bst
const root = new Node(4)

// insert(2, root)
// insert(6, root)
// insert(1, root)
// insert(3, root)
// insert(5, root)
// insert(7, root)

// printBinaryTree(binaryTreeToArr(root))

// function generateArray(n: number): number[] {
//   return Array.from({ length: n }, (_, i) => i + 1);
// }

// // const values = [1, 2, 3, 4, 5, 6, 7]
// // const values = generateArray(20)

// function shuffleArray<T>(array: T[]): T[] {
//   const result = [...array]
//   for (let i = result.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[result[i], result[j]] = [result[j], result[i]]
//   }
//   return result
// }

// const shuffledValues = shuffleArray(values)

// let root2: Node | null = null

// for (const value of shuffledValues) {
//   if (root2 === null) {
//     root2 = new Node(value)
//   }
//   insert(value, root2)
// }

// printBinaryTree(binaryTreeToArr(root2!))

// function printBinaryTree2(
//   root: Node | null,
//   prefix: string = '',
//   isLeft: boolean = true
// ) {
//   if (root === null) {
//     return
//   }

//   printBinaryTree2(root.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
//   console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${root.value}`)
//   printBinaryTree2(root.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
// }

// printBinaryTree2(root2)
