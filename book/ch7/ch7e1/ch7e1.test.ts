import { test } from 'node:test'
import assert from 'node:assert'
import { arraysIntersection as sol1 } from './ch7e1.sol1.js'
import { arraysIntersection as sol2 } from './ch7e1.sol2.js'

test('arraysIntersection sol1', async (t) => {
  await t.test('finds intersection between 2 arrays', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [0, 2, 4, 6, 8]
    const expected = [2, 4]
    const result = sol1(arr1, arr2)
    assert.deepStrictEqual(result, expected)
  })
})

test('arraysIntersection sol2', async (t) => {
  await t.test('finds intersection between 2 arrays', () => {
    const arr1 = [1, 2, 3, 4, 5]
    const arr2 = [0, 2, 4, 6, 8]
    const expected = [2, 4]
    const result = sol2(arr1, arr2)
    assert.deepStrictEqual(result, expected)
  })
})