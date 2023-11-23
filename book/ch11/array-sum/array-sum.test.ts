import {test} from 'node:test'
import assert from 'node:assert'
import { arraySum } from './array-sum.js'

test('arraySum', async (t) => {
  await t.test('sums all numbers in the array', () => {
    const arr = [1, 2, 3, 4, 5]
    const expected = arr.reduce((acc, currentValue) => acc + currentValue, 0)
    const result = arraySum(arr)
    assert.strictEqual(result, expected)
  })

  await t.test('works with 1 element arrays', () => {
    const arr = [5]
    const expected = arr.reduce((acc, currentValue) => acc + currentValue, 0)
    const result = arraySum(arr)
    assert.strictEqual(result, expected)
  })

  await t.test('works with empty arrays', () => {
    const arr: number[] = []
    const expected = arr.reduce((acc, currentValue) => acc + currentValue, 0)
    const result = arraySum(arr)
    assert.strictEqual(result, expected)
  })

  await t.test('works with negative numbers', () => {
    const arr = [-1, -2, -3, -4, -5]
    const expected = arr.reduce((acc, currentValue) => acc + currentValue, 0)
    const result = arraySum(arr)
    assert.strictEqual(result, expected)
  })
})