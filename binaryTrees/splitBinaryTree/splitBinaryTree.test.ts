import { test } from 'node:test'
import assert from 'node:assert'
import { splitBinaryTree, BinaryTree } from './splitBinaryTree'

test('splitBinaryTree', async (t) => {
  await t.test('returns 0 for a tree with a single node', () => {
    const tree = new BinaryTree(1)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 0)
  })

  await t.test('returns half of the total sum for a small tree', () => {
    const tree = new BinaryTree(1)
    tree.left = new BinaryTree(2)
    tree.right = new BinaryTree(3)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 3)
  })

  await t.test('returns half of the total sum for a small tree 2', () => {
    const tree = new BinaryTree(1)
    tree.left = new BinaryTree(2)
    tree.left.left = new BinaryTree(3)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 3)
  })

  await t.test('returns 0 for a small tree', () => {
    const tree = new BinaryTree(1)
    tree.left = new BinaryTree(2)
    tree.left.left = new BinaryTree(4)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 0)
  })

  await t.test('returns half of the total sum for a bigger tree', () => {
    const tree = new BinaryTree(1)
    tree.left = new BinaryTree(3)
    tree.right = new BinaryTree(-2)
    tree.left.left = new BinaryTree(6)
    tree.left.right = new BinaryTree(-5)
    tree.left.left.left = new BinaryTree(2)
    tree.right.left = new BinaryTree(5)
    tree.right.right = new BinaryTree(2)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 6)
  })

  await t.test('returns 0 for a bigger tree', () => {
    const tree = new BinaryTree(1)
    tree.left = new BinaryTree(3)
    tree.right = new BinaryTree(-2)
    tree.left.left = new BinaryTree(6)
    tree.left.right = new BinaryTree(-5)
    tree.left.left.left = new BinaryTree(2)
    tree.right.left = new BinaryTree(5)
    tree.right.right = new BinaryTree(12)
    const result = splitBinaryTree(tree)
    assert.strictEqual(result, 0)
  })
})