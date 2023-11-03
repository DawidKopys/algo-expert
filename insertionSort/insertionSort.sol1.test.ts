import { test } from 'node:test'
import { insertionSort } from './insertionSort.sol1.js'
import assert from 'node:assert'

test('insertionSort sol1', async (t) => {
  await t.test('sorts array', () => {
    const arr = [8, 5, 2, 9, 5, 6, 3]
    const expected = [...arr].sort((a, b) => a - b)
    const result = insertionSort(arr)
    assert.deepStrictEqual(result, expected)
  })

  await t.test('works with empty arrays', () => {
    const arr: number[] = []
    const result = insertionSort(arr)
    assert.deepStrictEqual(result, [])
  })

  await t.test('works with 1 element arrays', () => {
    const arr = [8]
    const result = insertionSort(arr)
    assert.deepStrictEqual(result, [8])
  })
  
  await t.test('works with negative numbers', () => {
    const arr = [-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8]
    const expected = [...arr].sort((a, b) => a - b)
    const result = insertionSort(arr)
    assert.deepStrictEqual(result, expected)
  })
})
