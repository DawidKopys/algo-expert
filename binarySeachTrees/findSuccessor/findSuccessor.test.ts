import { test } from 'node:test'
import assert from 'node:assert'
import { findSuccessor as sol1, BinaryTree } from './findSuccessor.sol1'
import { findSuccessor as sol2 } from './findSuccessor.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`findSuccessor sol${idx+1}`, async (t) => {
    await t.test('returns null for an inputTree with a single node', () => {
      const inputTree = new BinaryTree(1)

      const result = sol(inputTree, inputTree)
      assert.strictEqual(result, null)
    })

    await t.test('returns null for an inputTree with two nodes', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2, inputTree)

      const result = sol(inputTree, inputTree)
      assert.strictEqual(result, null)
    })

    await t.test('returns parent node for an inputTree with two nodes', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2, inputTree)

      const result = sol(inputTree, inputTree.left)
      assert.strictEqual(result, inputTree)
    })

    await t.test('returns the correct successor for a larger inputTree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2, inputTree)
      inputTree.right = new BinaryTree(3, inputTree)
      inputTree.left.left = new BinaryTree(4, inputTree.left)
      inputTree.left.right = new BinaryTree(5, inputTree.left)

      const result = sol(inputTree, inputTree.left)
      assert.strictEqual(result, inputTree.left.right)
    })

    await t.test('returns the correct successor for a larger inputTree 2', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2, inputTree)
      inputTree.left.right = new BinaryTree(3, inputTree.left)
      inputTree.left.right.right = new BinaryTree(4, inputTree.left.right)

      const result = sol(inputTree, inputTree.left.right.right)
      assert.strictEqual(result, inputTree)
    })
  })
})
