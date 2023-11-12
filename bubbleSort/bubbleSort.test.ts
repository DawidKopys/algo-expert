import { test } from 'node:test'
import { bubbleSort } from './bubbleSort.js'
import assert from 'node:assert'

test('bubbleSort', async (t) => {
  await t.test('sorts array', () => {
    const arr = [8, 5, 2, 9, 5, 6, 3]
    const result = bubbleSort(arr)
    assert.deepStrictEqual(result, [2, 3, 5, 5, 6, 8, 9])
  })

  await t.test('works with empty arrays', () => {
    const arr: number[] = []
    const result = bubbleSort(arr)
    assert.deepStrictEqual(result, [])
  })

  await t.test('works with 1 element arrays', () => {
    const arr = [8]
    const result = bubbleSort(arr)
    assert.deepStrictEqual(result, [8])
  })
  
  await t.test('works with negative numbers', () => {
    const arr = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
    const result = bubbleSort(arr)
    assert.deepStrictEqual(result, [-10, -10, -9, -7, -7, -6, -5, -2, 2, 2, 3, 3, 4, 5, 8, 8, 9, 10])
  })
})
