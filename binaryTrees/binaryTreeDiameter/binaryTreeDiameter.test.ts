import { test } from 'node:test'
import assert from 'node:assert'
import { binaryTreeDiameter, BinaryTree } from './binaryTreeDiameter'

test('binaryTreeDiameter', async (t) => {
  await t.test('returns 0 for a tree with a single node', () => {
    const inputTree = new BinaryTree(1)

    const result = binaryTreeDiameter(inputTree)
    assert.strictEqual(result, 0)
  })

  await t.test('returns 1 for a tree with two nodes', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(2)

    const result = binaryTreeDiameter(inputTree)
    assert.strictEqual(result, 1)
  })

  await t.test('returns the correct diameter for a larger tree', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(2)
    inputTree.right = new BinaryTree(3)
    inputTree.left.left = new BinaryTree(4)
    inputTree.left.right = new BinaryTree(5)

    const result = binaryTreeDiameter(inputTree)
    assert.strictEqual(result, 3)
  })

  await t.test('returns the correct diameter for a second larger tree', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(3)
    inputTree.right = new BinaryTree(2)
    inputTree.left.left = new BinaryTree(7)
    inputTree.left.left.left = new BinaryTree(8)
    inputTree.left.left.left.left = new BinaryTree(9)
    inputTree.left.right = new BinaryTree(4)
    inputTree.left.right.right = new BinaryTree(5)
    inputTree.left.right.right.right = new BinaryTree(6)

    const result = binaryTreeDiameter(inputTree)
    assert.strictEqual(result, 6)
  })

  await t.test(
    'returns the correct diameter for a tree with three nodes',
    () => {
      const inputTree = new BinaryTree(1)
      inputTree.left = new BinaryTree(3)
      inputTree.right = new BinaryTree(3)

      const result = binaryTreeDiameter(inputTree)
      assert.strictEqual(result, 2)
    }
  )
})
