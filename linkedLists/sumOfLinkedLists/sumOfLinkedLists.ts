import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 1 - "the easy solution"
// sol 1 - "naive" solution - first, get the numbers, add them and then build new linked list with the result
export function sumOfLinkedLists(linkedListOne: Node, linkedListTwo: Node) {
  // get number 1
  let number1str = ''
  let currentNode: Node | null = linkedListOne
  while (currentNode) {
    number1str += currentNode.value
    currentNode = currentNode.next
  }
  number1str = Array.from(number1str).reverse().join('')

  // get number 2
  let number2str = ''
  currentNode = linkedListTwo
  while (currentNode) {
    number2str += currentNode.value
    currentNode = currentNode.next
  }
  number2str = Array.from(number2str).reverse().join('')

  // calculate sum and build new linked list
  const sum = Number(number1str) + Number(number2str)
  let head: Node | null = null
  let prevNode: Node | null = null

  for (const digit of Array.from(sum.toString()).reverse() ) {
    const node = new Node(Number(digit))

    if (!head || !prevNode) {
      head = node
      prevNode = node
    } else {
      prevNode.next = node
      prevNode = node
    }
  }

  return head
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
