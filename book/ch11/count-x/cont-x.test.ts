import { test } from 'node:test'
import assert from 'node:assert'
import { countX } from './count-x.js'

test('countX', async (t) => {
  await t.test('counts all "x" characters in a string', () => {
    const str = 'axbxcxd'
    const expected = 3
    const result = countX(str)
    assert.strictEqual(result, expected)
  })

  await t.test('works with 1 character string', () => {
    const str = 'x'
    const expected = 1
    const result = countX(str)
    assert.strictEqual(result, expected)
  })

  await t.test('works with 1 character strings without "x"', () => {
    const str = 'a'
    const expected = 0
    const result = countX(str)
    assert.strictEqual(result, expected)
  })

  await t.test('works with empty string', () => {
    const str = ''
    const expected = 0
    const result = countX(str)
    assert.strictEqual(result, expected)
  })
})
