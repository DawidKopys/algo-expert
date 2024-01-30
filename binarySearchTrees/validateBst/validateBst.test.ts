import { test } from 'node:test'
import assert from 'node:assert'
import { validateBst as sol1, BST } from './validateBst.sol1'
import { validateBst as sol2 } from './validateBst.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`validateBST sol${idx + 1}`, async (t) => {
    await t.test('validates single node BST', () => {
      const tree = new BST(10)
      const result = sol(tree)
      assert.strictEqual(result, true)
    })

    await t.test('validates small valid BST', () => {
      const tree = new BST(10)
      tree.left = new BST(5)
      tree.right = new BST(15)
      const result = sol(tree)
      assert.strictEqual(result, true)
    })

    await t.test('validates small invalid BST', () => {
      const tree = new BST(10)
      tree.left = new BST(5)
      tree.right = new BST(9)
      const result = sol(tree)
      assert.strictEqual(result, false)
    })
    
    await t.test('validates bigger valid BST', () => {
      const tree = new BST(10)    
      tree.left = new BST(5)
      tree.right = new BST(15)
      tree.left.left = new BST(2)
      tree.left.right = new BST(5)
      tree.left.left.left = new BST(1)
      tree.right.left = new BST(13)
      tree.right.right = new BST(22)
      tree.right.left.right = new BST(14)
      const result = sol(tree)
      assert.strictEqual(result, true)
    })

    await t.test('validates bigger invalid BST', () => {
      const tree = new BST(10)    
      tree.left = new BST(5)
      tree.right = new BST(15)
      tree.left.left = new BST(2)
      tree.left.right = new BST(1)
      tree.left.left.left = new BST(1)
      tree.right.left = new BST(16)
      tree.right.right = new BST(22)
      tree.right.left.right = new BST(14)
      const result = sol(tree)
      assert.strictEqual(result, false)
    })

    await t.test('validates small invalid BST 2', () => {
      const tree = new BST(10)  
      tree.left = new BST(9)
      tree.left.right = new BST(11)
      const result = sol(tree)
      assert.strictEqual(result, false)
    })

    await t.test('validates smbiggerall invalid BST 2', () => {
      const tree = new BST(10)
      tree.left = new BST(5)
      tree.right = new BST(15)
      tree.left.left = new BST(2)
      tree.left.right = new BST(5)
      tree.right.right = new BST(22)
      tree.left.left.left = new BST(1)
      tree.left.right.right = new BST(11)
      const result = sol(tree)
      assert.strictEqual(result, false)
    })
  })
})
