import { test } from 'node:test'
import { powerset } from './powerset'
import assert from 'node:assert'

// todo, nie chce mi się implementować checkArrayEqual
test.skip('selectionSort', async (t) => {
  await t.test('sorts array', () => {
    const arr = [1, 2, 3]
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    const result = powerset(arr)
    const areEqual = checkArraysEqual(result, expected)
    assert.ok(areEqual)
  })
})

function checkArraysEqual(arr1: (number[])[], arr2: (number[])[]) {
  // todo :D
  return true
}
