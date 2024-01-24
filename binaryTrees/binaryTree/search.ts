import { Node } from '../node/Node'

function search(searchValue: number, node: Node | null) {
  // base case 1
  if (!node) {
    return null
  }
  // base case 2
  if (node.value === searchValue) {
    return node
  }
  if (node.value < searchValue) {
    return search(searchValue, node.right)
  }
  // if (node.value > searchValue) ...
  return search(searchValue, node.left)
}

// test 1 - full bst
const n1 = new Node(1)
const n3 = new Node(3)
const n2 = new Node(2, n1, n3)

const n5 = new Node(5)
const n7 = new Node(7)
const n6 = new Node(6, n5, n7)

const n4 = new Node(4, n2, n6) // root

const result = search(6, n4)

console.log('result :', result)
