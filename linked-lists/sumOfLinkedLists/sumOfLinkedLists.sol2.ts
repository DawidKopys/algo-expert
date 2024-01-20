import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 2 - "the easy solution", the correct solution, the one solution that makes sense
export function sumOfLinkedLists(linkedListOne: Node, linkedListTwo: Node) {
  let carry = 0
  let currentNodeOne: Node | null = linkedListOne
  let currentNodeTwo: Node | null = linkedListTwo
  
  let resultHead: Node | null = null
  let resultPrevNode: Node | null = null

  while (currentNodeOne || currentNodeTwo || carry) {
    // calculate the result
    const numOne = currentNodeOne?.value || 0
    const numTwo = currentNodeTwo?.value || 0
    // (... and move nodes)
    currentNodeOne = currentNodeOne?.next ?? null
    currentNodeTwo = currentNodeTwo?.next ?? null

    const tempSum = numOne + numTwo + carry

    let sum
    if (tempSum >= 10) {
      sum = tempSum - 10
      carry = 1
    } else {
      sum = tempSum
      carry = 0
    }

    // add sum to the linked list
    const sumNode = new Node(sum)

    if (!resultHead && !resultPrevNode) {
      resultHead = sumNode
      resultPrevNode = sumNode
    } else {
      resultPrevNode!.next = sumNode
      resultPrevNode = sumNode
    }
  }

  return resultHead
}


// const list1 = new LinkedList()
// list1.append([2, 4, 7, 1])
// const list2 = new LinkedList()
// list2.append([9, 4, 5])

// const list1Nodes = list1.getNodes()
// const list2Nodes = list2.getNodes()
// console.log('list1Nodes :', list1Nodes)
// console.log('list2Nodes :', list2Nodes)

// const sumHead = sumOfLinkedLists(list1.head!, list2.head!)
// const sumNodes = getNodes(sumHead!)
// console.log('sumNodes :', sumNodes)

// function getNodes(head: Node) {
//   let currentNode: Node | null = head
//   const nodes: Node[] = []

//   while (currentNode) {
//     nodes.push(currentNode)
//     currentNode = currentNode.next
//   }

//   return nodes
// }
