import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 1 - 3 pointers
export function mergeLinkedLists(linkedListOne: Node, linkedListTwo: Node) {
  // listOne is the list we are merging into
  // ... it is the value whose first node has smaller value
  const listOne = linkedListOne.value <= linkedListTwo.value ? linkedListOne : linkedListTwo
  const listTwo = linkedListOne.value <= linkedListTwo.value ? linkedListTwo : linkedListOne
  let nodeOnePrev: Node = listOne
  let nodeOne: Node | null = listOne.next
  let nodeTwo: Node | null = listTwo
  
  while (nodeTwo) {   
    if (!nodeOne || nodeTwo.value < nodeOne.value) {
      nodeOnePrev.next = nodeTwo
      const tmpNode: Node | null  = nodeTwo.next
      nodeTwo.next = nodeOne
      nodeTwo = tmpNode
      nodeOne = nodeOnePrev.next
    } else {
      nodeOne = nodeOne.next
      nodeOnePrev = nodeOnePrev.next!
    }
  }

  return listOne
}

// test 1
// const l1n1 = new Node(1)
// const l1n2 = new Node(4)
// const l1n3 = new Node(7)
// const list1 = new LinkedList([l1n1, l1n2, l1n3])
// const l2n1 = new Node(2)
// const l2n2 = new Node(3)
// const l2n3 = new Node(5)
// const list2 = new LinkedList([l2n1, l2n2, l2n3])
// test 2
// const l1n1 = new Node(1)
// const l1n2 = new Node(2)
// const l1n3 = new Node(3)
// const list1 = new LinkedList([l1n1, l1n2, l1n3])
// const l2n1 = new Node(5)
// const l2n2 = new Node(6)
// const l2n3 = new Node(7)
// const list2 = new LinkedList([l2n1, l2n2, l2n3])
// test 3
// const l1n1 = new Node(5)
// const l1n2 = new Node(6)
// const l1n3 = new Node(7)
// const list1 = new LinkedList([l1n1, l1n2, l1n3])
// const l2n1 = new Node(1)
// const l2n2 = new Node(2)
// const l2n3 = new Node(3)
// const list2 = new LinkedList([l2n1, l2n2, l2n3])

// const list1Nodes = list1.getNodes()
// const list2Nodes = list2.getNodes()
// console.log('list1Nodes :', list1Nodes)
// console.log('list2Nodes :', list2Nodes)

// const mergedList = mergeLinkedLists(list1.head!, list2.head!)
// const mergedListNodes = getNodes(mergedList)
// console.log('mergedListNodes :', mergedListNodes)

// function getNodes(head: Node | null) {
//   let currentNode: Node | null = head
//   const nodes: Node[] = []

//   while (currentNode) {
//     nodes.push(currentNode)
//     currentNode = currentNode.next
//   }

//   return nodes
// }
