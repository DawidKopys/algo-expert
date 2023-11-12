import { test } from 'node:test'
import assert from 'node:assert'
import { findDuplicate as sol1 } from './ch7e1.sol1.js'
import { findDuplicate as sol2 } from './ch7e1.sol2.js'

test('findDuplicate', async (t) => {
  for (const [index, solFnc] of [sol1, sol2].entries()) {
    await t.test(`${solFnc.name} sol${index + 1}`, async (t2) => {
      await t2.test('finds first duplicate withing array of strings', () => {
        const array = 'abcdcefe'.split('')
        const expected = 'c'
        const result = sol1(array)
        assert.equal(result, expected)
      })
      await t2.test('returns null for array with no duplicates', () => {
        const array = 'abcdef'.split('')
        const expected = null
        const result = sol1(array)
        assert.equal(result, expected)
      })
      await t2.test('works with empty array', () => {
        const array: string[] = []
        const expected = null
        const result = sol1(array)
        assert.equal(result, expected)
      })
      await t2.test('works with empty array', () => {
        const array: string[] = []
        const expected = null
        const result = sol1(array)
        assert.equal(result, expected)
      })
    })
  }
})