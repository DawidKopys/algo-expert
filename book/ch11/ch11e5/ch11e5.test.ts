import { test } from 'node:test'
import assert from 'node:assert'
import { uniquePaths } from './ch11e5.sol1.js'

test('uniquePaths', async (t) => {
  await t.test('returns 28 paths for grid consisting of 3 x 7 grid', () => {
    const rows = 3
    const columns = 7
    const expected = 28
    const result = uniquePaths(rows, columns)
    assert.deepStrictEqual(result, expected)
  })
})
