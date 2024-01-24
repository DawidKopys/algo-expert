import { test } from 'node:test'
import assert from 'node:assert'
import { symmetricalTree as sol1, BinaryTree } from './symmetricalTree.sol1'
import { symmetricalTree as sol2 } from './symmetricalTree.sol2'
import { symmetricalTree as sol3 } from './symmetricalTree.sol3'

const solutions = [sol1, sol2, sol3]

solutions.forEach((sol, idx) => {
  test(`symmetricalTree sol${idx+1}`, async (t) => {
    await t.test('returns true for single node tree', () => {
      const inputTree = new BinaryTree(1)

      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns true for small symmetrical tree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.right = new BinaryTree(2)
      inputTree.left = new BinaryTree(2)

      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns false for small asymmetrical tree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.right = new BinaryTree(2)
      inputTree.left = new BinaryTree(3)

      const result = sol(inputTree)
      assert.strictEqual(result, false)
    })

    await t.test('returns true for a larger symetrical tree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)
      inputTree.right = new BinaryTree(2)
      inputTree.left.left = new BinaryTree(3)
      inputTree.left.right = new BinaryTree(4)
      inputTree.right.right = new BinaryTree(3)
      inputTree.right.left = new BinaryTree(4)
      inputTree.left.left.left = new BinaryTree(5)
      inputTree.left.left.right = new BinaryTree(6)
      inputTree.right.right.left = new BinaryTree(6)
      inputTree.right.right.right = new BinaryTree(5)
      
      const result = sol(inputTree)
      assert.strictEqual(result, true)
    })

    await t.test('returns false for a larger asymetrical tree', () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(2)
      inputTree.right = new BinaryTree(2)
      inputTree.left.left = new BinaryTree(3)
      inputTree.left.right = new BinaryTree(4)
      inputTree.right.right = new BinaryTree(3)
      inputTree.right.left = new BinaryTree(4)
      inputTree.left.left.left = new BinaryTree(5)
      inputTree.left.left.right = new BinaryTree(6)
      inputTree.right.right.left = new BinaryTree(6)
      inputTree.right.right.right = new BinaryTree(2)
      
      const result = sol(inputTree)
      assert.strictEqual(result, false)
    })
  })
})
