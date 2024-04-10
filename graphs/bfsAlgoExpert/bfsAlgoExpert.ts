// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string
  children: Node[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string): Node {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array: string[]) {
    const queue: Node[] = [this]
    const visited = new Set<Node>([this])

    while (queue.length > 0) {
      const currentNode = queue.pop()!

      array.push(currentNode.name) // visit
      
      for (const child of currentNode.children) {
        if (visited.has(child)) {
          continue
        }

        queue.unshift(child)
        visited.add(child)
      }
    }

    return array
  }
}
