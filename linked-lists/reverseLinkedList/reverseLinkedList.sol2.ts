export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// sol 2 - O(n) time, O(1) space, 3 cursors: prevNode, currrentNode, nextNode
export function reverseLinkedList(head: LinkedList) {
  let prevNode = head
  let currentNode = head.next

  prevNode.next = null
  
  while (currentNode) {
    const nextNode = currentNode.next // save for later

    // "rewire"
    currentNode.next = prevNode

    // move forward
    prevNode = currentNode
    currentNode = nextNode
  }

  return prevNode
}
