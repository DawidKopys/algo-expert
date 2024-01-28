import { test } from 'node:test'
import assert from 'node:assert/strict'
import { threeSum as sol1 } from './ch13e01.sol1'
import { threeSum as sol2 } from './ch13e01.sol2'
import { threeSum as sol3 } from './ch13e01.sol3'

const solutions = [sol1, sol2, sol3]

solutions.forEach((sol, idx) => {
  test(`threeSum sol${idx + 1}`, async (t) => {
    await t.test('returns null for arrays with length < 3', () => {
      const arr = [1, 2]
      const expected = null
      const result = sol(arr)
      assert.equal(result, expected)
    })
    await t.test('finds biggest sum of 3 elements in [1, 2, 3] array', () => {
      const arr = [1, 2, 3]
      const expected = 6
      const result = sol(arr)
      assert.equal(result, expected)
    })
    await t.test('finds biggest sum of 3 elements in [10, 2, 3, 4, 1, 2, 3, -4, 1] array', () => {
      const arr = [10, 2, 3, 4, 1, 2, 3, -4, 1]
      const expected = 17
      const result = sol(arr)
      assert.equal(result, expected)
    })
    await t.test('finds biggest sum of 3 elements in [100, 1, 1, 1, 100, 4, 2, 100] array', () => {
      const arr = [100, 1, 1, 1, 100, 4, 2, 100]
      const expected = 300
      const result = sol(arr)
      assert.equal(result, expected)
    })
  })
  
})
