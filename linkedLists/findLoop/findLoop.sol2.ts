import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 2 - 2 pointers and some math
// O(N) time, O(1) space
export function findLoop(head: Node) {
  let pointerSlow: Node = head.next!
  let pointerFast: Node = head.next!.next!

  while (pointerSlow !== pointerFast) {
    pointerSlow = pointerSlow.next!
    pointerFast = pointerFast.next!.next!
  }

  pointerSlow = head

  while (pointerSlow !== pointerFast) {
    pointerSlow = pointerSlow.next!
    pointerFast = pointerFast.next!
  }

  return pointerSlow
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
const n10 = new Node(9)
const n11 = n5

const list = new LinkedList([n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11])
const loopStart = findLoop(list.head!)

console.log('loopStart :', loopStart)
