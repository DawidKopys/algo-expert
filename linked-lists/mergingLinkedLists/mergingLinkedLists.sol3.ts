import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 3 - some js solution from algoexpert with 5 upvotes
export function mergingLinkedLists (linkedListOne: Node, linkedListTwo: Node) {
  let first: Node | null = linkedListOne
  let second: Node | null = linkedListTwo
  console.log('first :', first)
  console.log('second :', second)
  

  console.group('while')
  while (first !== second) {
    console.log('first :', first)
    console.log('second :', second)
    
    first = first === null ? linkedListTwo : first.next;
    second = second === null ? linkedListOne : second.next;
  }
  console.groupEnd()
  

  console.log('returning stuff :', first)
  
  return first
}

// const list1 = new LinkedList()
// // list1.append([2, 3, 8, 4])
// list1.append([1, 2])
// const list2 = new LinkedList()
// // list2.append([6, 8, 4])
// list2.append([3, 4, 5, 6])

// const list1Nodes = list1.getNodes()
// const list2Nodes = list2.getNodes()
// console.log('list1Nodes :', list1Nodes)
// console.log('list2Nodes :', list2Nodes)

// const intersection = mergingLinkedLists(list1.head!, list2.head!)
// const intersectionNodes = getNodes(intersection)
// console.log('sumNodes :', intersectionNodes)

// function getNodes(head: Node | null) {
//   let currentNode: Node | null = head
//   const nodes: Node[] = []

//   while (currentNode) {
//     nodes.push(currentNode)
//     currentNode = currentNode.next
//   }

//   return nodes
// }
