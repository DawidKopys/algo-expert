import { test } from 'node:test'
import assert from 'node:assert'
import { nodeDepths as sol1, BinaryTree } from './nodeDepths.sol1'
import { nodeDepths as sol2 } from './nodeDepths.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`nodeDepths sol${idx+1}`, async (t) => {
    await t.test('sums nodes\' depths', () => {
      const inputRoot = new BinaryTree(1)
      inputRoot.left = new BinaryTree(2)
      inputRoot.right = new BinaryTree(3)
      inputRoot.left.left = new BinaryTree(4)
      inputRoot.left.right = new BinaryTree(5)
      inputRoot.left.left.left = new BinaryTree(8)
      inputRoot.left.left.right = new BinaryTree(9)
      inputRoot.right.left = new BinaryTree(6)
      inputRoot.right.right = new BinaryTree(7)
  
      const expected = 16
      
      const result = sol(inputRoot)
      assert.strictEqual(result, expected)
    })
  
    await t.test('works with single node', () => {
      const inputRoot = new BinaryTree(1)
  
      const expected = 0
      
      const result = sol(inputRoot)
      assert.strictEqual(result, expected)
    })
  })
})
