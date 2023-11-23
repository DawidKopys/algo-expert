import { test } from 'node:test'
import assert from 'node:assert'
import { getNthTriangularNumber } from './ch11e3.js'

test('getNthTriangularNumber', async (t) => {
  await t.test('returns 28 for n 7', () => {
    const n = 7
    const expected = 28
    const result = getNthTriangularNumber(n)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('returns 1 for n 1', () => {
    const n = 1
    const expected = 1
    const result = getNthTriangularNumber(n)
    assert.deepStrictEqual(result, expected)
  })
})
