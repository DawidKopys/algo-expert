import { test } from 'node:test'
import assert from 'node:assert'
import { LinkedList } from '../singlyLinkedList/LinkedList'
import { Node } from '../node/Node'
import { sumOfLinkedLists as sol1 } from './sumOfLinkedLists'
import { sumOfLinkedLists as sol2 } from './sumOfLinkedLists.sol2'

const numbersToTest = [
  [1742, 549],
  [123, 1],
  [1, 123],
  [9999, 999] 
]

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`sumOfLinkedLists sol${idx + 1}`, async (t) => {
    for (const [num1, num2] of numbersToTest) {
      await t.test(`sums ${num1} and ${num2}`, () => {
        const numToArr = (n: number) => n.toString().split('').reverse().map(Number)
        
        const listNum1 = new LinkedList()
        listNum1.append(numToArr(num1))
        const listNum2 = new LinkedList()
        listNum2.append(numToArr(num2))
    
        const expectedSum = num1 + num2
        const expectedSumArr = numToArr(expectedSum)
    
        const result = sol(listNum1.head!, listNum2.head!)
    
        assert.deepStrictEqual(getNodesValues(result!), expectedSumArr)
      })
    }
  })
})

function getNodesValues(head: Node) {
  let currentNode: Node | null = head
  const values: number[] = []

  while (currentNode) {
    values.push(currentNode.value)
    currentNode = currentNode.next
  }

  return values
}
