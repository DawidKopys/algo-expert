import { test } from 'node:test'
import assert from 'node:assert'
import { LinkedList } from '../singlyLinkedList/LinkedList'
import { Node } from '../node/Node'
import { mergeLinkedLists as sol1 } from './mergeLinkedLists'
// import { mergingLinkedLists as sol2 } from './mergingLinkedLists.sol2'
// import { mergingLinkedLists as sol3 } from './mergingLinkedLists.sol3'

const testData = [
  () => {
    // test 1
    const l1n1 = new Node(1)
    const l1n2 = new Node(4)
    const l1n3 = new Node(7)
    const list1 = new LinkedList([l1n1, l1n2, l1n3])
    const l2n1 = new Node(2)
    const l2n2 = new Node(3)
    const l2n3 = new Node(5)
    const list2 = new LinkedList([l2n1, l2n2, l2n3])
    const mergedListNodes = [l1n1, l2n1, l2n2, l1n2, l2n3, l1n3]

    return {
      listOne: list1,
      listTwo: list2,
      expectedMergedListNodes: mergedListNodes
    }
  },
  () => {
    // test 2
    const l1n1 = new Node(1)
    const l1n2 = new Node(2)
    const l1n3 = new Node(3)
    const list1 = new LinkedList([l1n1, l1n2, l1n3])
    const l2n1 = new Node(5)
    const l2n2 = new Node(6)
    const l2n3 = new Node(7)
    const list2 = new LinkedList([l2n1, l2n2, l2n3])
    const mergedListNodes = [l1n1, l1n2, l1n3, l2n1, l2n2, l2n3]

    return {
      listOne: list1,
      listTwo: list2,
      expectedMergedListNodes: mergedListNodes
    }
  },
  () => {
    // test 3
    const l1n1 = new Node(5)
    const l1n2 = new Node(6)
    const l1n3 = new Node(7)
    const list1 = new LinkedList([l1n1, l1n2, l1n3])
    const l2n1 = new Node(1)
    const l2n2 = new Node(2)
    const l2n3 = new Node(3)
    const list2 = new LinkedList([l2n1, l2n2, l2n3])
    const mergedListNodes = [l2n1, l2n2, l2n3, l1n1, l1n2, l1n3]

    return {
      listOne: list1,
      listTwo: list2,
      expectedMergedListNodes: mergedListNodes
    }
  }
]

// prettier-ignore
const solutions = [
  sol1,
  // sol2,
  // sol3
]

solutions.forEach((sol, idx) => {
  test(`mergingLinkedLists sol${idx + 1}`, async (t) => {
    for (const fixture of testData) {
      const { listOne, listTwo, expectedMergedListNodes } = fixture()

      await t.test(
        `merges lists [${listOne.getNodesValues()}] and [${listTwo.getNodesValues()}]`,
        () => {
          const result = sol(listOne.head!, listTwo.head!)
          const resultNodes = getNodes(result!)
          assert.deepStrictEqual(resultNodes, expectedMergedListNodes)
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
