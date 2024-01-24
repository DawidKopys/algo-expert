import { test } from 'node:test'
import assert from 'node:assert'
import { deleteNode1, deleteNode2 } from './delete'
import { Node } from '../node/Node'

import { binaryTreeToArr } from '../util/binaryTreeToArr'
import { printBinaryTree } from '../util/printBinaryTree'

const solutions = [deleteNode1, deleteNode2]

solutions.forEach((sol, idx) => {
  test(`deleteNode sol${idx + 1}`, async (t) => {
    await t.test('should delete a leaf node', () => {
      // input tree
      const inputRoot = new Node(10)
      inputRoot.left = new Node(5)
      inputRoot.right = new Node(15)

      // expected tree after deletion
      const expectedRoot = new Node(10)
      expectedRoot.right = new Node(15)

      const newRoot = sol(5, inputRoot)
      assert.strictEqual(newRoot?.left, null)
      assert.deepStrictEqual(newRoot, expectedRoot)
    })

    await t.test('should delete a node with one child', () => {
      // input tree
      const inputRoot = new Node(10)
      inputRoot.left = new Node(5)
      inputRoot.right = new Node(15)
      inputRoot.right.left = new Node(12)

      // expected tree after deletion
      const expectedRoot = new Node(10)
      expectedRoot.left = new Node(5)
      expectedRoot.right = new Node(12)

      const newRoot = sol(15, inputRoot)
      assert.strictEqual(newRoot?.right?.value, 12)
      assert.deepStrictEqual(newRoot, expectedRoot) // kozak w chuj
    })

    await t.test('should delete a node with two children (whose successor doesn\'t have a right child)', () => {
      // input tree
      const inputRoot = new Node(10)
      inputRoot.left = new Node(5)
      inputRoot.right = new Node(15)
      inputRoot.right.left = new Node(12)
      inputRoot.right.right = new Node(20)

      // expected tree after deletion
      const expectedRoot = new Node(10)
      expectedRoot.left = new Node(5)
      expectedRoot.right = new Node(20)
      expectedRoot.right.left = new Node(12)

      const newRoot = sol(15, inputRoot)
      // Assuming lift function replaces node with in-order successor
      assert.strictEqual(newRoot?.right?.value, 20)
      assert.deepStrictEqual(newRoot, expectedRoot)
    })

    await t.test('should delete a node with two children (whose successor has a right child)', () => {
      // input tree
      const inputRoot = new Node(10)
      inputRoot.left = new Node(5)
      inputRoot.right = new Node(15) // deleted node, also parent of the successor
      inputRoot.right.left = new Node(12)
      inputRoot.right.right = new Node(20) // successor
      inputRoot.right.right.right = new Node(22) // successor's right child

      // console.log('input tree:')
      // printBinaryTree(binaryTreeToArr(inputRoot))

      // expected tree after deletion
      const expectedRoot = new Node(10)
      expectedRoot.left = new Node(5)
      expectedRoot.right = new Node(20)
      expectedRoot.right.left = new Node(12)
      expectedRoot.right.right = new Node(22)

      // console.log('expected tree:')
      // printBinaryTree(binaryTreeToArr(expectedRoot))

      const newRoot = sol(15, inputRoot)
      // Assuming lift function replaces node with in-order successor
      assert.strictEqual(newRoot?.right?.value, 20)
      assert.deepStrictEqual(newRoot, expectedRoot)
    })

    await t.test(
      'should return null if the node to delete is not found',
      () => {
        const root = new Node(10)
        root.left = new Node(5)
        root.right = new Node(15)

        const newRoot = sol(100, root)
        assert.deepStrictEqual(newRoot, root)
      }
    )
  })
})
