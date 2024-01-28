import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isNumInCorrectPlace } from './isNumInCorrectPlace.js'

test('isNumInCorrectPlace', async (t) => {
  await test('should return true when num is in correct place in the array', () => {
    const testCases = [
      { arr: [1, 2, 3, 4], num: 3 },
      { arr: [1, 2, 3, 3], num: 3 },
      { arr: [-1, -2, -5, -10, 1], num: 1 },
      { arr: [0], num: 0 }
    ]

    for (const { arr, num } of testCases) {
      assert.equal(
        isNumInCorrectPlace(arr, num),
        true,
        `Number ${num} is in wrong place in array ${arr}`
      )
    }
    
    // assert.equal(isNumInCorrectPlace([1, 2, 3, 4], 3), true)
    // assert.equal(isNumInCorrectPlace([1, 2, 3, 3], 3), true)
    // assert.equal(isNumInCorrectPlace([-1, -2, -5, -10, 1], 1), true)
    // assert.equal(isNumInCorrectPlace([0], 0), true)
  })

  await t.test(
    'should return false when num is NOT in correct place in the array',
    () => {
      assert.equal(isNumInCorrectPlace([1, 2, 4, 3], 3), false)
      assert.equal(isNumInCorrectPlace([5, -10, -5, -1], -10), false)
      assert.equal(isNumInCorrectPlace([-1, -2, -5, -10], -10), false)
    }
  )
})
