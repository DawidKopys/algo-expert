import { Node } from '../node/Node'

interface Element {
  accept(visitor: Visitor): void
}

class NodeElement implements Element {
  value: string
  left: NodeElement | null
  right: NodeElement | null
  
  constructor(
    value: string,
    left: NodeElement | null = null,
    right: NodeElement | null = null
  ) {
    this.value = value
    this.left = left
    this.right = right
  }

  accept(visitor: Visitor) {
    visitor.visit(this)
  }
}

const node = new NodeElement('123')

const node2 = new Node(123)
console.log(node2.left)


interface Visitor {
  visit(node: Element): void
}

class PrintWithOrderVisitor implements Visitor {
  currentIdx: number

  constructor() {
    this.currentIdx = 1
  }
  
  visit(node: NodeElement) {
    console.log(`${this.currentIdx}: ${node.value}`)
    this.currentIdx += 1
  }
}

class AggregationVisitor<T> implements Visitor {
  nodes: NodeElement['value'][]

  constructor() {
    this.nodes = []
  }

  visit(node: NodeElement) {
    this.nodes.push(node.value)
  }
}

const root = new NodeElement('Moby Dick')
root.left = new NodeElement('Great Expectations')
root.left.left = new NodeElement('Alice in Wonderland')
root.left.right = new NodeElement('Lord of the Flies')
root.right = new NodeElement('Robinson Crusoe')
root.right.left = new NodeElement('Pride and Prejudice')
root.right.right = new NodeElement('The Odyssey')

function traverseAndVisit(node: NodeElement | null, visitor: Visitor) {
  if (!node) {
    return
  }
  traverseAndVisit(node.left, visitor)
  node.accept(visitor)
  traverseAndVisit(node.right, visitor)
}

const printVisitor = new PrintWithOrderVisitor()
traverseAndVisit(root, printVisitor)

const aggregationVisitor = new AggregationVisitor()
traverseAndVisit(root, aggregationVisitor)
console.log('aggregationVisitor.nodes :', aggregationVisitor.nodes)
