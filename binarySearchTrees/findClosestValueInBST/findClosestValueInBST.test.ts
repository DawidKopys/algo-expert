import { test } from 'node:test'
import assert from 'node:assert'
import { findClosestValueInBst as sol1, BST } from './findClosestValueInBST.sol1'
import { findClosestValueInBst as sol2 } from './findClosestValueInBST.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test.only(`findClosestValueInBst sol${idx + 1}`, async (t) => {
  await t.test('returns the target value when it exists in the tree', () => {
    const tree = new BST(10)
    tree.left = new BST(5)
    tree.right = new BST(15)
    const result = sol(tree, 15)
    assert.strictEqual(result, 15)
  })

  await t.test('returns the closest value when the target does not exist in the tree', () => {
    const tree = new BST(10)
    tree.left = new BST(5)
    tree.right = new BST(15)
    const result = sol(tree, 12)
    assert.strictEqual(result, 10)
  })

  await t.test('returns the closest value for a bigger tree', () => {
    const tree = new BST(10)
    tree.left = new BST(5)
    tree.right = new BST(15)
    tree.left.left = new BST(2)
    tree.left.right = new BST(5)
    tree.left.left.left = new BST(1)
    tree.right.left = new BST(13)
    tree.right.right = new BST(22)
    tree.right.left.right = new BST(14)
    const result = sol(tree, 12)
    assert.strictEqual(result, 13)
  })

  await t.test('returns the node value for a tree with a single node', () => {
    const tree = new BST(1)
    const result = sol(tree, 100)
    assert.strictEqual(result, 1)
  })
})
})