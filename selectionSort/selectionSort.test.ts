import { test, describe, mock } from 'node:test'
import { selectionSort } from './selectionSort'
import assert from 'node:assert'

describe.only('greatestNumberBad', () => {
  test.only('finds greatest number in an array', () => {
    const arr = [8, 5, 2, 9, 5, 6, 3]
    const expected = [...arr].sort((a, b) => a - b)
    const result = selectionSort(arr)
    assert.deepStrictEqual(result, expected)
  })
})
