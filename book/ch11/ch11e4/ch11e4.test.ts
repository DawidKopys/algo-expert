import { test } from 'node:test'
import assert from 'node:assert'
import { findXIndex } from './ch11e4.js'

test('findXIndex', async (t) => {
  await t.test('returns 28 for n 7', () => {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    const expected = 23
    const result = findXIndex(str)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('works if there are two "x" characters in the string', () => {
    const str = 'axaxax'
    const expected = 1
    const result = findXIndex(str)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('works if there are only "x" characters in the string', () => {
    const str = 'xxxxx'
    const expected = 0
    const result = findXIndex(str)
    assert.deepStrictEqual(result, expected)
  })
})
