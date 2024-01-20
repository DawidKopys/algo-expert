import { Node } from '../node/Node'
import { printBinaryTree2 } from '../util/printBinaryTree'

// Level Order Search / Breadth First Search (BFS)
// I am using an array as a queue for simplicity
function levelOrderSearch<T>(node: Node<T>) {
  let queue: Node<T>[] = []
  queue.push(node)
  while(queue.length > 0) {
    let currentNode = queue.shift()!
    console.log(currentNode.value) // visit the node
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
}

const root = new Node('Moby Dick')
root.left = new Node('Great Expectations')
root.left.left = new Node('Alice in Wonderland')
root.left.right = new Node('Lord of the Flies')
root.right = new Node('Robinson Crusoe')
root.right.left = new Node('Pride and Prejudice')
root.right.right = new Node('The Odyssey')

printBinaryTree2(root)

levelOrderSearch(root)