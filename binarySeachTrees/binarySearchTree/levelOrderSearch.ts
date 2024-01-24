import { Node } from '../node/Node'
import { printBinaryTree2 } from '../util/printBinaryTree'

// Level Order Search / Breadth First Search (BFS)
// I am using an array as a queue for simplicity
function levelOrderSearch<T>(node: Node<T>) {
  const queue: Node<T>[] = []
  queue.push(node)
  while(queue.length > 0) {
    let currentNode = queue.shift()!
    console.log(currentNode.value) // visit the node
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
}

// this algorithm is similar to level order search
// but it uses stack instead of a queue and is actually a DFS algorithm - not BFS
function NOTLevelOrderSearch2<T>(node: Node<T>) {
  const queue: Node<T>[] = []
  queue.push(node)
  while(queue.length > 0) {
    let currentNode = queue.pop()!
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
console.log()
NOTLevelOrderSearch2(root)

// test 2
console.log()
const r = new Node(4)
r.left = new Node(2)
r.left.left = new Node(1)
r.left.right = new Node(3)
r.right = new Node(5)
r.right.left = new Node(6)
r.right.right = new Node(7)

levelOrderSearch(r)

console.log()
NOTLevelOrderSearch2(r)
