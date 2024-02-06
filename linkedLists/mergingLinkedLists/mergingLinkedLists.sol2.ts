import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 2 - sol 1 from algo expert
export function mergingLinkedLists(linkedListOne: Node, linkedListTwo: Node) {
  // get list 1 length
  let currentNodeOne: Node | null = linkedListOne
  let countOne = 0
  while (currentNodeOne !== null) {
    countOne++
    currentNodeOne = currentNodeOne.next
  }

  // get list 2 length
  let currentNodeTwo: Node | null = linkedListTwo
  let countTwo = 0
  while (currentNodeTwo !== null) {
    countTwo++
    currentNodeTwo = currentNodeTwo.next
  }

  // move pointers to their initial positions
  const difference = Math.abs(countTwo - countOne)
  let biggerCurrentNode: Node | null =
    countOne > countTwo ? linkedListOne : linkedListTwo
  let smallerCurrentNode: Node | null =
    countOne > countTwo ? linkedListTwo : linkedListOne
    
  for (let i = 0; i < difference; i++) {
    biggerCurrentNode = biggerCurrentNode!.next
  }

  // check for intersection
  // aaa to działa na algoexpert bo intersection obu LinkedList składa się z tych samych obiektów Node!
  // ... u mnie nie działa bo to są inne obiekty, tylko o tych samych wartościach ...
  // ... juz poprawilem moje testy tak zeby przechodzilo tez u mnie
  while (biggerCurrentNode !== smallerCurrentNode) {
    biggerCurrentNode = biggerCurrentNode!.next
    smallerCurrentNode = smallerCurrentNode!.next
  }

  return biggerCurrentNode
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
