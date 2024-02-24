import { test } from 'node:test'
import assert from 'node:assert'
import { multiStringSearch as sol1 } from './multiStringSearch.sol1'
import { multiStringSearch as sol2 } from './multiStringSearch.sol2'
import { multiStringSearch as sol3 } from './multiStringSearch.sol3'

const solutions = [sol1, sol2, sol3]

solutions.forEach((sol, idx) => {
  test.only(`multiStringSearch function sol${idx + 1}`, async (t) => {
  await t.test('with multiple small strings', () => {
    const bigString = 'this is a big string'
    const smallStrings = ['this', 'is', 'a', 'big', 'string']
    const result = sol(bigString, smallStrings)
    const expected = [true, true, true, true, true]
    assert.deepStrictEqual(result, expected)
  })

  await t.test('with some non-existing small strings', () => {
    const bigString = 'this is a big string'
    const smallStrings = ['this', 'is', 'not', 'in', 'string']
    const result = sol(bigString, smallStrings)
    const expected = [true, true, false, true, true]
    assert.deepStrictEqual(result, expected)
  })

  await t.test('with substrings', () => {
    const bigString = 'thisisalongword'
    const smallStrings = ['this', 'is', 'a', 'long', 'word', 'drow', 'foo', 'bar']
    const result = sol(bigString, smallStrings)
    const expected = [true, true, true, true, true, false, false, false]
    assert.deepStrictEqual(result, expected)
  })

  await t.test('with no small strings', () => {
    const bigString = 'this is a big string'
    const smallStrings: string[] = []
    const result = sol(bigString, smallStrings)
    const expected: boolean[] = []
    assert.deepStrictEqual(result, expected)
  })

  await t.test('with bbbabbb and bbabbb', () => {
    const bigString = 'bbbabbb'
    const smallStrings = ['bbabbb']
    const result = sol(bigString, smallStrings)
    const expected = [true]
    assert.deepStrictEqual(result, expected)
  })
})
})
