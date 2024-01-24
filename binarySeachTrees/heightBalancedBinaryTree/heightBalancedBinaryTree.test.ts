import { test } from 'node:test'
import assert from 'node:assert'
import { heightBalancedBinaryTree as sol1, BinaryTree } from './heightBalancedBinaryTree.sol1'
import { heightBalancedBinaryTree as sol2 } from './heightBalancedBinaryTree.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`heightBalancedBinaryTree sol${idx+1}`, async (t) => {
    await t.test('returns true for an inputTree with a single node', () => {
      const inputTree = new BinaryTree(1)

      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns true for an inputTree with two nodes', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)

      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns true for a larger inputTree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)
      inputTree.right = new BinaryTree(3)
      inputTree.left.left = new BinaryTree(4)
      inputTree.left.right = new BinaryTree(5)

      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns false answer for a larger inputTree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)
      inputTree.right = new BinaryTree(3)
      inputTree.left.left = new BinaryTree(4)
      inputTree.left.right = new BinaryTree(5)
      inputTree.left.right.right = new BinaryTree(6)

      const result = sol(inputTree)
      assert.strictEqual(result, false)
    })

    await t.test('returns false for a larger inputTree 2', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)
      inputTree.left.right = new BinaryTree(3)
      inputTree.left.right.right = new BinaryTree(4)

      const result = sol(inputTree)
      assert.strictEqual(result, false)
    })
  })
})
