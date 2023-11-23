import { test } from 'node:test'
import assert from 'node:assert'
import { getEvenNumbers } from './ch11e2.js'

test('getEvenNumbers', async (t) => {
  await t.test('return even numbers from array of numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 8, 10, 7]
    const expected = [2, 4, 6, 8, 10]
    const result = getEvenNumbers(arr)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('returns [] for empty array', () => {
    const arr: number[] = []
    const expected: number[] = []
    const result = getEvenNumbers(arr)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('works with 1-element arrays', () => {
    const arr = [2]
    const expected = [2]
    const result = getEvenNumbers(arr)
    assert.deepStrictEqual(result, expected)
  })
})
