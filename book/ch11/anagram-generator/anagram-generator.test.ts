import { test } from 'node:test'
import assert from 'node:assert'
import { generateAnagrams } from './anagram-generator.js'

test('generateAnagrams', async (t) => {
  await t.test('returns anagrams of ab', () => {
    const str = 'ab'
    const expected = ['ab', 'ba']
    const result = generateAnagrams(str)

    const areEqual = containTheSameElementsRegardlessOfOrder(result, expected)
    assert.ok(areEqual)
  })

  await t.test('returns anagrams of abc', () => {
    const str = 'abc'
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
    const result = generateAnagrams(str)

    const areEqual = containTheSameElementsRegardlessOfOrder(result, expected)
    assert.ok(areEqual)
  })

  await t.test('returns anagrams of abcd', () => {
    const str = 'abcd'
    const expected = [
      'dcab',
      'cdab',
      'cadb',
      'cabd',
      'dacb',
      'adcb',
      'acdb',
      'acbd',
      'dabc',
      'adbc',
      'abdc',
      'abcd',
      'dcba',
      'cdba',
      'cbda',
      'cbad',
      'dbca',
      'bdca',
      'bcda',
      'bcad',
      'dbac',
      'bdac',
      'badc',
      'bacd'
    ]
    const result = generateAnagrams(str)

    const areEqual = containTheSameElementsRegardlessOfOrder(result, expected)
    assert.ok(areEqual)
  })

  await t.test('works with 1 character strings', () => {
    const str = 'a'
    const expected = ['a']
    const result = generateAnagrams(str)
    assert.deepStrictEqual(result, expected)
  })

  await t.test('returns empty array for empty string input', () => {
    const str = ''
    const expected: string[] = []
    const result = generateAnagrams(str)
    assert.deepStrictEqual(result, expected)
  })
})

function containTheSameElementsRegardlessOfOrder(array1: any[], array2: any[]) {
  if (array1.length === array2.length) {
    return array1.every((element) => {
      if (array2.includes(element)) {
        return true
      }

      return false
    })
  }

  return false
}
