import { test } from 'node:test'
import assert from 'node:assert'
import { mergeBinaryTrees as sol1, BinaryTree } from './mergeBinaryTree.sol1'
import { mergeBinaryTrees as sol2 } from './mergeBinaryTree.sol2'
import { mergeBinaryTrees as sol3 } from './mergeBinaryTree.sol3'

const solutions = [sol1, sol2, sol3]

solutions.forEach((sol, idx) => {
  test(`mergeBinaryTrees sol${idx+1}`, async (t) => {
    await t.test('merges single node trees', () => {
      const r1 = new BinaryTree(1)
      const r2 = new BinaryTree(2)
      const expectedTree = new BinaryTree(3)
      
      const result = sol(r1, r2)
      assert.deepStrictEqual(result, expectedTree)
    })

    await t.test('merges small trees', () => {
      const r1 = new BinaryTree(1)
      r1.left = new BinaryTree(2)
      r1.left.left = new BinaryTree(3)

      const r2 = new BinaryTree(3)
      r2.right = new BinaryTree(4)
      r2.right.right = new BinaryTree(5)

      const expectedTree = new BinaryTree(4)
      expectedTree.left = new BinaryTree(2)
      expectedTree.left.left = new BinaryTree(3)
      expectedTree.right = new BinaryTree(4)
      expectedTree.right.right = new BinaryTree(5)

      const result = sol(r1, r2)
      assert.deepStrictEqual(result, expectedTree)
    })

    await t.test('merges bigger trees', () => {
      const r1 = new BinaryTree(1)
      r1.left = new BinaryTree(3)
      r1.right = new BinaryTree(2)
      r1.left.left = new BinaryTree(7)
      r1.left.right = new BinaryTree(4)

      const r2 = new BinaryTree(1)
      r2.left = new BinaryTree(5)
      r2.right = new BinaryTree(9)
      r2.left.left = new BinaryTree(2)
      r2.right.left = new BinaryTree(7)
      r2.right.right = new BinaryTree(6)

      const expectedTree = new BinaryTree(2)
      expectedTree.left = new BinaryTree(8)
      expectedTree.right = new BinaryTree(11)
      expectedTree.left.left = new BinaryTree(9)
      expectedTree.left.right = new BinaryTree(4)
      expectedTree.right.left = new BinaryTree(7)
      expectedTree.right.right = new BinaryTree(6)

      const result = sol(r1, r2)
      assert.deepStrictEqual(result, expectedTree)
    })
  })
})
