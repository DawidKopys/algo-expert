import { test } from 'node:test'
import assert from 'node:assert'
import { countCharacters } from './ch11e1.js'

test('countCharacters', async (t) => {
  await t.test('counts characters in an array of strings', () => {
    const arr = ['ab', 'c', 'def', 'ghij']
    const expected = 10
    const result = countCharacters(arr)
    assert.strictEqual(result, expected)
  })
  await t.test('returns 0 for empty array', () => {
    const arr: string[] = []
    const expected = 0
    const result = countCharacters(arr)
    assert.strictEqual(result, expected)
  })
  await t.test('works with 1-element arrays', () => {
    const arr = ['ghij']
    const expected = 4
    const result = countCharacters(arr)
    assert.strictEqual(result, expected)
  })
})
