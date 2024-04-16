import { test } from 'node:test'
import assert from 'node:assert'
import { riverSizes as sol1 } from './riverSizes'
import { riverSizes as sol2 } from './riverSizes.sol2'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test(`riverSizes sol${idx + 1}`, async (t) => {
    await t.test('should return empty array for empty input', async () => {
      const matrix: number[][] = []
      const expected: number[] = []
      const result = sol(matrix)
      assert.deepStrictEqual(result.sort(), expected.sort())
    })

    await t.test(
      'should return correct river sizes for single row matrix',
      async () => {
        const matrix: number[][] = [[1, 0, 1, 1, 0, 1, 1, 1]]
        const expected: number[] = [1, 2, 3]
        const result = sol(matrix)
        assert.deepStrictEqual(result.sort(), expected.sort())
      }
    )

    await t.test(
      'should return correct river sizes for single column matrix',
      async () => {
        const matrix: number[][] = [[1], [0], [1], [1], [0], [1], [1], [1]]
        const expected: number[] = [1, 2, 3]
        const result = sol(matrix)
        assert.deepStrictEqual(result.sort(), expected.sort())
      }
    )

    await t.test(
      'should return correct river sizes for square matrix',
      async () => {
        const matrix: number[][] = [
          [1, 0, 0, 1, 0],
          [1, 0, 1, 0, 0],
          [0, 0, 1, 0, 1],
          [1, 0, 1, 0, 1],
          [1, 0, 1, 1, 0]
        ]
        const expected: number[] = [2, 1, 5, 2, 2]
        const result = sol(matrix)
        assert.deepStrictEqual(result.sort(), expected.sort())
      }
    )

    await t.test(
      'should return correct river sizes for rectangular matrix',
      async () => {
        const matrix: number[][] = [
          [1, 0, 0, 1, 0, 1],
          [1, 0, 1, 0, 0, 1],
          [0, 0, 1, 0, 1, 1]
        ]
        const expected: number[] = [2, 1, 4, 2]
        const result = sol(matrix)
        assert.deepStrictEqual(result.sort(), expected.sort())
      }
    )
  })
})
