import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import { minimumPassesOfMatrix as sol1} from './minimumPassesOfMatrix.sol1'
import { minimumPassesOfMatrix as sol2 } from './minimumPassesOfMatrix.sol2'

const solutions = [sol1, sol2]

solutions.forEach((minimumPassesOfMatrix, index) => {
  test.only(`minimumPassesOfMatrix sol${index + 1}`, async (t) => {
    await t.test('returns the minimum number of passes', () => {
      const matrix = [
        [0, -2, -1],
        [-5, 2, 0],
        [-6, -2, 0]
      ]
      const expected = 2
      const actual = minimumPassesOfMatrix(matrix)
      assert.equal(actual, expected)
    })
  
    await t.test('returns the minimum number of passes in a more complex matrix', () => {
      const matrix = [
        [0, -1, -3, 2, 0],
        [1, -2, -5, -1, -3],
        [3, 0, 0, -4, -1]
      ]
      const expected = 3
      const actual = minimumPassesOfMatrix(matrix)
      assert.equal(actual, expected)
    })
  
    await t.test('returns -1 when it is impossible to convert all elements', () => {
      const matrix = [
        [-1, 0, 0],
        [0, -1, -1],
        [0, 0, -1]
      ]
      const expected = -1
      const actual = minimumPassesOfMatrix(matrix)
      assert.equal(actual, expected)
    })
  
    await t.test('returns 0 when all elements are positive', () => {
      const matrix = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]
      const expected = 0
      const actual = minimumPassesOfMatrix(matrix)
      assert.equal(actual, expected)
    })
  })
  
})
