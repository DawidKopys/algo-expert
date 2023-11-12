import { test } from 'node:test'
import assert from 'node:assert'
import { findMissingLetter } from './ch7e3.js'

test('findMissingLetter', async (t) => {
  await t.test('finds missing letter in a sentence', () => {
    const str = 'the quick brown box jumps over a lazy dog'
    const expected = 'f'
    const result = findMissingLetter(str)
    assert.equal(result, expected)
  })
  await t.test('returns null if all alphabet letters are in the str', () => {
    const str = 'the quick brown fox jumps over a lazy dog'
    const expected = null
    const result = findMissingLetter(str)
    assert.equal(result, expected)
  })
})