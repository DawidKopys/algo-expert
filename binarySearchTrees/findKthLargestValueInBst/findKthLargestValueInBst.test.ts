import { test } from 'node:test'
import assert from 'node:assert'
import {
  findKthLargestValueInBst as sol1,
  BST
} from './findKthLargestValueInBst.sol1'
import { findKthLargestValueInBst as sol2 } from './findKthLargestValueInBst.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test.only(`findKthLargestValueInBst sol${idx + 1}`, async (t) => {
    await t.test('should correctly find the kth largest value in a BST', () => {
      const tree = new BST(15)
      tree.left = new BST(5)
      tree.left.left = new BST(2)
      tree.left.right = new BST(5)
      tree.left.left.left = new BST(1)
      tree.left.left.right = new BST(3)
      tree.right = new BST(20)
      tree.right.left = new BST(17)
      tree.right.right = new BST(22)

      const result = sol(tree, 3)
      assert.strictEqual(result, 17)
    })

    await t.test('should handle BSTs with a single node', () => {
      const tree = new BST(10)
      const result = sol(tree, 1)
      assert.strictEqual(result, 10)
    })
  })
})
