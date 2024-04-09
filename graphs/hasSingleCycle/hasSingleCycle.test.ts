import { test } from 'node:test'
import assert from 'node:assert'
import { hasSingleCycle } from './hasSingleCycle'

test('hasSingleCycle', async (t) => {
  await t.test('should return true for a single cycle', () => {
    const array = [2, 3, 1, -4, -4, 2]
    const result = hasSingleCycle(array)
    assert.strictEqual(result, true)
  })

  await t.test('should return false for no cycle', () => {
    const array = [1, 2, 3, 4, -2, 3, 7, 8, -26]
    const result = hasSingleCycle(array)
    assert.strictEqual(result, true)
  })

  await t.test('should return true for a single cycle with negative numbers', () => {
    const array = [-1, -1, -1, -1, -1]
    const result = hasSingleCycle(array)
    assert.strictEqual(result, true)
  })

  await t.test('should return false for no cycle with negative numbers', () => {
    const array = [-1, -2, -3, -4, -2, -3, -7, -8, 26]
    const result = hasSingleCycle(array)
    assert.strictEqual(result, false)
  })
})