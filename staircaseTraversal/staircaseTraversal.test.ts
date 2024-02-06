import { test } from 'node:test'
import assert from 'node:assert'
import { staircaseTraversal } from './staircaseTraversal.js'

test('staircaseTraversal', async (t) => {
  await t.test('returns the number of paths when maxSteps = 2', () => {
    const height = 4
    const maxSteps = 2
    const expected = 5
    const result = staircaseTraversal(height, maxSteps)
    assert.strictEqual(result, expected)
  })
  await t.test('returns the number of paths when maxSteps = 3', () => {
    const height = 4
    const maxSteps = 3
    const expected = 7
    const result = staircaseTraversal(height, maxSteps)
    assert.strictEqual(result, expected)
  })
})