import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 1 - with nodes set, doesn't meet task requirements as it is not constant space
// O(N) time, O(N) space
export function findLoop(head: Node) {
  const nodes = new Set<Node>()

  let currentNode: Node | null = head
  while (currentNode) {
    if (nodes.has(currentNode)) {
      return currentNode
    }
    nodes.add(currentNode)
    currentNode = currentNode.next
  }

  return null
}

const n1 = new Node(0)
const n2 = new Node(1)
const n3 = new Node(2)
const n4 = new Node(3)
const n5 = new Node(4)
const n6 = new Node(5)
const n7 = new Node(6)
const n8 = new Node(7)
const n9 = new Node(8)
const n10 = n5

const list = new LinkedList([n1, n2, n3, n4, n5, n6, n7, n8, n9, n10])
const loopStart = findLoop(list.head!)

console.log('loopStart :', loopStart)
