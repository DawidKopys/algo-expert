import { test } from 'node:test'
import assert from 'node:assert'
import { addUntil100 } from './ch12e1.js'

test('addUntil100', async (t) => {
  await t.test('sums array numbers until it would go over 100', () => {
    const arr = [20, 25, 10, 5, 5, 3, 50]
    const expected = 98
    const result = addUntil100(arr)
    assert.deepStrictEqual(result, expected)
  })
})
