import { test } from 'node:test'
import assert from 'node:assert'
import { findSuccessor, BinaryTree } from './findSuccessor'

test.only('findSuccessor', async (t) => {
  await t.test('returns null for an inputTree with a single node', () => {
    const inputTree = new BinaryTree(1)

    const result = findSuccessor(inputTree, inputTree)
    assert.strictEqual(result, null)
  })

  await t.test('returns null for an inputTree with two nodes', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(2)

    const result = findSuccessor(inputTree, inputTree)
    assert.strictEqual(result, null)
  })

  await t.test('returns parent node for an inputTree with two nodes', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(2)

    const result = findSuccessor(inputTree, inputTree.left)
    assert.strictEqual(result, inputTree)
  })

  await t.test('returns the correct successor for a larger inputTree', () => {
    const inputTree = new BinaryTree(1)
    inputTree.left = new BinaryTree(2)
    inputTree.right = new BinaryTree(3)
    inputTree.left.left = new BinaryTree(4)
    inputTree.left.right = new BinaryTree(5)

    const result = findSuccessor(inputTree, inputTree.left)
    assert.strictEqual(result, inputTree.left.right)
  })
})