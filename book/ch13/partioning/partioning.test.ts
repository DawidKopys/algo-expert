import { test } from 'node:test'
import assert from 'node:assert/strict'
import { partition } from './partioning.js'
import { isNumInCorrectPlace } from './isNumInCorrectPlace.js'

test('partioning', async (t) => {
  await t.test('puts the last element from [0, 5, 2, 1, 6, 3] array in correct place', () => {
    const arr = [0, 5, 2, 1, 6, 3]
    partition(arr, 0, arr.length - 1)
    assert.equal(isNumInCorrectPlace(arr, 3), true)
  })
  await t.test('puts the last element from [0, 1, 5, 2, 1, 6, 0, 3] array in correct place', () => {
    const arr = [0, 1, 5, 2, 1, 6, 0, 3]
    partition(arr, 0, arr.length - 1)
    assert.equal(isNumInCorrectPlace(arr, 3), true)
  })
  await t.test('puts the last element from [0, 1] array in correct place', () => {
    const arr = [0, 1]
    partition(arr, 0, arr.length - 1)
    assert.equal(isNumInCorrectPlace(arr, 1), true)
  })
  await t.test('puts the last element from [1, 0] array in correct place', () => {
    const arr = [1, 0]
    partition(arr, 0, arr.length - 1)
    assert.equal(isNumInCorrectPlace(arr, 1), true)
  })
})
