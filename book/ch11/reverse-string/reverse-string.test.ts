import { test } from 'node:test'
import assert from 'node:assert'
import { reverseString } from './reverse-string.js'

test('reverseString', async (t) => {
  await t.test('reverses a string', () => {
    const str = 'abcde'
    const expected = 'edcba'
    const result = reverseString(str)
    assert.strictEqual(result, expected)
  })

  await t.test('works with 1 character strings', () => {
    const str = 'a'
    const expected = 'a'
    const result = reverseString(str)
    assert.strictEqual(result, expected)
  })

  await t.test('works with empty string', () => {
    const str = ''
    const expected = ''
    const result = reverseString(str)
    assert.strictEqual(result, expected)
  })
})
