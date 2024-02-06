// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// sol 1 BAD, see sol 2 - O(n) time, O(n) space, not so perfect, we are storing all nodes in an array
export function reverseLinkedList(head: LinkedList) {
  const nodes: LinkedList[] = [] // ten typ powinien się nazywac node czy cos takiego
  let currentNode = head
  let currentIndex = 0

  // get to the last node, add all nodes to an array
  while (currentNode.next !== null) {
    nodes.push(currentNode)
    currentNode = currentNode.next
    currentIndex += 1
  }

  // currentNode should be the last node by now (and currentIndex is its index)
  // ... it will be our new head
  const newHead = currentNode

  // loop through nodes array in reverse order,
  // ... building our reversed list one by one
  while (currentIndex > 0) {
    currentNode.next = nodes[currentIndex - 1]
    currentNode = currentNode.next
    currentIndex -= 1
  }
  currentNode.next = null

  return newHead
}

