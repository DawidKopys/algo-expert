import { test, describe, mock } from 'node:test'
import { greatestNumberBad } from './ch4-e4.js'
import assert from 'node:assert'

describe('greatestNumberBad', () => {
  test('finds greatest number in an array', () => {
    const arr = [1, 2, 3, 5, 2]
    assert.strictEqual(greatestNumberBad(arr), 5)
  })
})
