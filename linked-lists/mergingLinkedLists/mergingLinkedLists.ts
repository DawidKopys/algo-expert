import { Node } from '../node/Node'
import { LinkedList } from '../singlyLinkedList/LinkedList'

// sol 1 - add list 1 nodes to a set, then traverse through list 2 and look for an intersection
// O(N+M) ??? albo O(N+M*N) ???
// to rozwiązanie jest trudniejsze niz powinno byc bo ja zle traktuje "intersection nodes"
// ... u mnie to są Node'y które mają po prostu te same wartości
// ... a tu chodzi o Ndoe'y, które są tymi samymi obiektami w obu listach (tak jest w algo)
// ... i wtedy ten algorytm moze być prostszy - sol2 albo sol3
export function mergingLinkedLists(linkedListOne: Node, linkedListTwo: Node) {
  // add list 1 nodes to a set
  const listOneNodes = new Set<Node>()
  let currentNode: Node | null = linkedListOne
  while (currentNode) {
    listOneNodes.add(currentNode)
    currentNode = currentNode.next
  }

  // traverse through second list and look for possible intersections
  let listTwoNode: Node | null = linkedListTwo

  while (listTwoNode) {
    // does the first list contain node with the same value
    for (const listOneNode of listOneNodes.values()) {
      if (listTwoNode.value === listOneNode.value) {
        // check if this node is start of an intersection
        let tmpListOneNode: Node | null = listOneNode.next
        let tmpListTwoNode: Node | null = listTwoNode.next

        while (
          tmpListOneNode &&
          tmpListTwoNode &&
          tmpListOneNode.value === tmpListTwoNode.value
        ) {
          tmpListOneNode = tmpListOneNode.next
          tmpListTwoNode = tmpListTwoNode.next
        }

        if (!tmpListOneNode && !tmpListTwoNode) {
          return listOneNode
        }
      }
    }

    listTwoNode = listTwoNode.next
  }

  return null
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
