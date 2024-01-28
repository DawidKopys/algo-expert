import { test } from 'node:test'
import assert from 'node:assert/strict'
import { findMissingNumber as sol1 } from './ch13e02.sol1'
import { findMissingNumber as sol2 } from './ch13e02.sol2'
// import { threeSum as sol3 } from './ch13e01.sol3'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`findMissingNumber sol${idx + 1}`, async (t) => {
    await t.test('finds missing number in [0, 2, 1] array', () => {
      const arr = [0, 2, 1]
      const expected = 3
      const result = sol(arr)
      assert.equal(result, expected)
    })
    await t.test('finds missing number in [5, 2, 4, 1, 0] array', () => {
      const arr = [5, 2, 4, 1, 0]
      const expected = 3
      const result = sol(arr)
      assert.equal(result, expected)
    })
    await t.test('finds missing number in [9, 3, 2, 5, 6, 7, 1, 0, 4] array', () => {
      const arr = [9, 3, 2, 5, 6, 7, 1, 0, 4]
      const expected = 8
      const result = sol(arr)
      assert.equal(result, expected)
    })
  })
})
