import { Node } from '../node/Node'

export function printBinaryTree<T>(treeArray: (T | null)[][]) {
  // Helper function to calculate the number of spaces
  function getSpaces(level: number) {
    return ' '.repeat(Math.pow(2, level) - 1)
    // return ' '.repeat(Math.pow(2, level - 1) - 1)
  }

  // Get the maximum level of the tree
  const maxLevel = treeArray.length

  // Iterate through each level of the tree
  for (let level = 0; level < maxLevel; level++) {
    // Calculate the number of spaces before and between nodes
    const spacesBefore = getSpaces(maxLevel - level)
    const spacesBetween = getSpaces(maxLevel - level + 1)

    // Print the nodes at this level with appropriate spacing
    const nodes = treeArray[level]
    let line = spacesBefore
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] !== null) {
        line += nodes[i] + spacesBetween
      } else {
        line += ' ' + spacesBetween
      }
    }

    console.log(line)
  }
}

// Test case
// const treeArray = [[4], [2, 6], [1, 3, 5, 7]]
// printBinaryTree(treeArray)

// console.log()

// const treeArray2 = [[4], [2, 6], [null, null, 5, 7]]
// printBinaryTree(treeArray2)

// console.log()

// const treeArray3 = [[4], [2, 6666], [1, 3, 5, 77]]
// printBinaryTree(treeArray3)

// copilot version
export function printBinaryTree2<T>(
  root: Node<T> | null,
  prefix: string = '',
  isLeft: boolean = true
) {
  if (root === null) {
    return
  }

  printBinaryTree2(root.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${root.value}`)
  printBinaryTree2(root.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
}