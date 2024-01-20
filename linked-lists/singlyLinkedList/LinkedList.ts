import { Node } from '../node/Node'

class LinkedList {
  head: Node | null
  private tail: Node | null

  constructor()
  constructor(values: number[])
  constructor(nodes: Node[])
  constructor(payload?: number[] | Node[]) {
    this.head = null
    this.tail = null

    if (payload) {
      this.append(payload)
    }
  }

  append(value: number | Node): void
  append(values: number[] | Node[]): void
  append(payload: number | Node | number[] | Node[]) {
    if (Array.isArray(payload)) {
      payload.forEach(this.appendNode.bind(this))
      return
    }

    this.appendNode(payload)
  }

  private appendNode(value: Node): void
  private appendNode(node: number): void
  private appendNode(payload: number | Node): void
  private appendNode(payload: number | Node) {
    let node = typeof payload === 'number' ? new Node(payload) : payload
    
    if (!this.head || !this.tail) {
      this.head = node
      this.tail = node
      return
    }
    
    this.tail.next = node
    this.tail = node
  }

  getNodes(): Node[] {
    let currentNode = this.head
    const nodes: Node[] = []
    
    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    return nodes
  }

  getNodesValues(): number[] {
    let currentNode = this.head
    const nodesValues: number[] = []
    
    while (currentNode) {
      nodesValues.push(currentNode.value)
      currentNode = currentNode.next
    }

    return nodesValues 
  }
}

export { LinkedList }

// const list = new LinkedList()
// const n1 = new Node(1)
// const n2 = new Node(2)
// const n3 = new Node(3)
// const n4 = new Node(4)
// list.append([n1, n2, n3, n4])
// const nodes = list.getNodes()
// console.log('nodes :', nodes)
