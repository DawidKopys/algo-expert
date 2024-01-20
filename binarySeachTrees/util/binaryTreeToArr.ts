import { Node } from '../node/Node'

export function binaryTreeToArr<T>(root: Node<T>) {
  const arr: (T | null)[][] = []
  let currentNodes: (Node<T> | null)[] = [root]

  while (currentNodes.length > 0 && currentNodes.some((node) => node)) {
    // add nodes' values to the array
    const nodesValues = currentNodes
      // .filter((node): node is Node => !!node)
      // .map((node) => node.value)
      .map((node) => node?.value || null)
    arr.push(nodesValues)

    // move down the tree
    currentNodes = currentNodes.reduce<(Node<T> | null)[]>((acc, node) => {
      return [...acc, node?.left || null, node?.right || null]
    }, [])
  }

  return arr
}

// function printBst(root: Node) {
//   // todo: zaimplementuj korzystajac z bstToArr
// }

// test 1 - full bst
// const n1 = new Node(1)
// const n3 = new Node(3)
// const n2 = new Node(2, n1, n3)

// const n5 = new Node(5)
// const n7 = new Node(7)
// const n6 = new Node(6, n5, n7)

// const n4 = new Node(4, n2, n6) // root

// test 2 - not full
// const n5 = new Node(5)
// const n7 = new Node(7)
// const n6 = new Node(6, n5, n7)

// const n4 = new Node(4, null, n6) // root

// const result = bstToArr(n4)

// console.log('result :', result)

