import { test } from 'node:test'
import assert from 'node:assert'
import { evaluateExpressionTree, BinaryTree } from './evaluateExpressions'

test('evaluateExpressionTree', async (t) => {
  await t.test('evaluates expression 1', () => {
    const inputRoot = new BinaryTree(-1)
    inputRoot.left = new BinaryTree(-2)
    inputRoot.right = new BinaryTree(-3)
    inputRoot.left.left = new BinaryTree(-4)
    inputRoot.left.right = new BinaryTree(2)
    inputRoot.left.left.left = new BinaryTree(2)
    inputRoot.left.left.right = new BinaryTree(3)
    inputRoot.right.left = new BinaryTree(8)
    inputRoot.right.right = new BinaryTree(3)

    const expected = 6
    const result = evaluateExpressionTree(inputRoot)

    assert.strictEqual(result, expected)
  })

  await t.test('evaluates expression 2', () => {
    const inputRoot = new BinaryTree(-3)
    inputRoot.left = new BinaryTree(9)
    inputRoot.right = new BinaryTree(-2)
    inputRoot.right.left = new BinaryTree(4)
    inputRoot.right.right = new BinaryTree(6)

    const expected = -4
    const result = evaluateExpressionTree(inputRoot)

    assert.strictEqual(result, expected)
  })
})
