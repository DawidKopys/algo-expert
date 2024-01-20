import { test } from 'node:test'
import assert from 'node:assert'
import { branchSums as sol1, BinaryTree } from './branchSums.sol1'
import { branchSums as sol2 } from './branchSums.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`branchSums sol${idx+1}`, async (t) => {
    await t.test('finds branches sums', () => {
      const inputRoot = new BinaryTree(1)
      inputRoot.left = new BinaryTree(2)
      inputRoot.right = new BinaryTree(3)
      inputRoot.left.left = new BinaryTree(4)
      inputRoot.left.right = new BinaryTree(5)
      inputRoot.left.left.left = new BinaryTree(8)
      inputRoot.left.left.right = new BinaryTree(9)
      inputRoot.left.right.left = new BinaryTree(10)
      inputRoot.right.left = new BinaryTree(6)
      inputRoot.right.right = new BinaryTree(7)
  
      const expected = [15, 16, 18, 10, 11]
      
      const result = sol(inputRoot)
      assert.deepStrictEqual(result, expected)
    })
  
    await t.test('works with single node', () => {
      const inputRoot = new BinaryTree(1)
  
      const expected = [1]
      
      const result = sol(inputRoot)
      assert.deepStrictEqual(result, expected)
    })
  })
})
