export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// sol 3 - sol 2 but more concise (different initial position of cursors)
export function reverseLinkedList(head: LinkedList) {
  let prevNode: LinkedList | null = null
  let currentNode: LinkedList | null = head
  
  while (currentNode) {
    const nextNode: LinkedList | null = currentNode.next // save for later

    // "rewire"
    currentNode.next = prevNode

    // move forward
    prevNode = currentNode
    currentNode = nextNode
  }

  return prevNode
}
