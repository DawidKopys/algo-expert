import { test } from 'node:test'
import assert from 'node:assert'
import { findFirstUniqueCharacter } from './ch7e4.sol2.js'

test('findFirstUniqueCharacter', async (t) => {
  await t.test('1 finds first unique character in a string', () => {
    const str = 'minimum'
    const expected = 'n'
    const result = findFirstUniqueCharacter(str)
    assert.equal(result, expected)
  })
  await t.test('2 finds first unique character in a string', () => {
    const str = 'minimnum'
    const expected = 'u'
    const result = findFirstUniqueCharacter(str)
    assert.equal(result, expected)
  },)
})
