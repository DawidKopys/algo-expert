export class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }
}

// sol 4 - clever solution with 2 pointers, O(n) time, O(1) space
export function middleNode(linkedList: LinkedList) {
  let slowNode = linkedList
  let fastNode: LinkedList | null = linkedList

  while (fastNode !== null && fastNode.next !== null) {
    slowNode = slowNode.next!
    fastNode = fastNode.next.next
  }

  return slowNode
}
