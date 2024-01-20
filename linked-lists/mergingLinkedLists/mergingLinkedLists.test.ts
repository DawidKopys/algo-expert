import { test } from 'node:test'
import assert from 'node:assert'
import { LinkedList } from '../singlyLinkedList/LinkedList'
import { Node } from '../node/Node'
import { mergingLinkedLists as sol1 } from './mergingLinkedLists'
import { mergingLinkedLists as sol2 } from './mergingLinkedLists.sol2'
import { mergingLinkedLists as sol3 } from './mergingLinkedLists.sol3'

const testData = [
  () => { // test 1
    const l1n1 = new Node(2)
    const l1n2 = new Node(3)
    const l1n3 = new Node(8)
    const l1n4 = new Node(4)

    const l2n1 = new Node(6)

    return {
      listOne: new LinkedList([l1n1, l1n2, l1n3, l1n4]),
      listTwo: new LinkedList([l2n1, l1n3, l1n4]),
      intersectionNodes: [l1n3, l1n4]
    }
  },
  () => { // test 2
    const l1n1 = new Node(1)
    const l1n2 = new Node(2)

    const l2n1 = new Node(3)
    const l2n2 = new Node(4)
    const l2n3 = new Node(5)
    const l2n4 = new Node(6)

    return {
      listOne: new LinkedList([l1n1, l1n2]),
      listTwo: new LinkedList([l2n1, l2n2, l2n3, l2n4]),
      intersectionNodes: null
    }
  },
  () => { // test 3
    const l1n1 = new Node(5)
    const l1n2 = new Node(12)
    const l1n3 = new Node(14)
    const l1n4 = new Node(2)
    const l1n5 = new Node(13)
    const l1n6 = new Node(21)
    const l1n7 = new Node(33)
    const l1n8 = new Node(8)

    const l2n1 = new Node(10)
    const l2n2 = new Node(3)
    const l2n3 = new Node(48)
    const l2n4 = new Node(0)

    return {
      listOne: new LinkedList([l1n1, l1n2, l1n3, l1n4, l1n5, l1n6, l1n7, l1n8]),
      listTwo: new LinkedList([l2n1, l2n2, l2n3, l2n4, l1n5, l1n6, l1n7, l1n8]),
      intersectionNodes: [l1n5, l1n6, l1n7, l1n8]
    }
  }
]

const solutions = [sol1, sol2, sol3]

solutions.forEach((sol, idx) => {
  test(`mergingLinkedLists sol${idx + 1}`, async (t) => {
    for (const fixture of testData) {
      const { listOne, listTwo, intersectionNodes } = fixture()

      await t.test(
        `finds intersection in [${listOne.getNodesValues()}] and [${listTwo.getNodesValues()}] lists`,
        () => {
          const result = sol(listOne.head!, listTwo.head!)
          const resultNodes = result ? getNodes(result) : result
          assert.deepStrictEqual(resultNodes, intersectionNodes)
        }
      )
    }
  })
})

function getNodes(head: Node) {
  let currentNode: Node | null = head
  const values: Node[] = []

  while (currentNode) {
    values.push(currentNode)
    currentNode = currentNode.next
  }

  return values
}

function getNodesValues(head: Node) {
  let currentNode: Node | null = head
  const values: number[] = []

  while (currentNode) {
    values.push(currentNode.value)
    currentNode = currentNode.next
  }

  return values
}
