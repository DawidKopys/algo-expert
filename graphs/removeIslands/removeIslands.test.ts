import { test } from 'node:test'
import assert from 'node:assert'
import {
  removeIslands,
  getNeighbours,
  dfsTraverse,
  getIslands,
  type River
} from './removeIslands'

test('getNeighbours', async (t) => {
  await t.test(
    'should return all neighbours for a cell in the middle of the matrix',
    async () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [0, 1],
        [2, 1],
        [1, 0],
        [1, 2]
      ]
      const result = getNeighbours(matrix, 1, 1)
      assert.deepStrictEqual(result, expected)
    }
  )

  await t.test(
    'should return only bottom and right neighbours for the top left cell',
    async () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [1, 0],
        [0, 1]
      ]
      const result = getNeighbours(matrix, 0, 0)
      assert.deepStrictEqual(result, expected)
    }
  )

  await t.test(
    'should return only top and left neighbours for the bottom right cell',
    async () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [1, 2],
        [2, 1]
      ]
      const result = getNeighbours(matrix, 2, 2)
      assert.deepStrictEqual(result, expected)
    }
  )

  await t.test(
    'should return top, bottom, and right neighbours for a cell on the left edge',
    async () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [0, 0],
        [2, 0],
        [1, 1]
      ]
      const result = getNeighbours(matrix, 1, 0)
      assert.deepStrictEqual(result, expected)
    }
  )

  await t.test(
    'should return top, bottom, and left neighbours for a cell on the right edge',
    async (t) => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
      const expected = [
        [0, 2],
        [2, 2],
        [1, 1]
      ]
      const result = getNeighbours(matrix, 1, 2)
      assert.deepStrictEqual(result, expected)
    }
  )
})

test('dfsTraverse', async (t) => {
  await t.test(
    "should visit all nodes in a matrix made out of 1's",
    async () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]
      const visitedNodes = new Set<string>()
      const result = dfsTraverse(matrix, 0, 0, visitedNodes)
      result!.nodes.sort()
      const expectedVisited = new Set([
        '0,0',
        '0,1',
        '0,2',
        '1,0',
        '1,1',
        '1,2',
        '2,0',
        '2,1',
        '2,2'
      ])
      const expectedResult: River = {
        nodes: [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 0],
          [1, 1],
          [1, 2],
          [2, 0],
          [2, 1],
          [2, 2]
        ].sort() as [number, number][],
        isIsland: false
      }
      assert.deepStrictEqual(visitedNodes, expectedVisited)
      assert.deepStrictEqual(result, expectedResult)
    }
  )

  await t.test(
    'should visit all connected nodes in a small group',
    async () => {
      const matrix = [
        [1, 1, 0],
        [0, 1, 0],
        [1, 0, 1]
      ]
      const visitedNodes = new Set<string>()
      const result = dfsTraverse(matrix, 0, 0, visitedNodes)
      const expectedVisited = new Set(['0,0', '0,1', '1,1'])
      const expectedResult: River = {
        nodes: [
          [0, 0],
          [0, 1],
          [1, 1]
        ],
        isIsland: false
      }
      assert.deepStrictEqual(visitedNodes, expectedVisited)
      assert.deepStrictEqual(result, expectedResult)
    }
  )

  await t.test('should not visit nodes that are not connected', async () => {
    const matrix = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
    const visitedNodes = new Set<string>()
    const result = dfsTraverse(matrix, 1, 1, visitedNodes)
    const expectedVisited = new Set(['1,1'])
    const expectedResult: River = {
      nodes: [[1, 1]],
      isIsland: true
    }
    assert.deepStrictEqual(visitedNodes, expectedVisited)
    assert.deepStrictEqual(result, expectedResult)
  })

  await t.test(
    'should visit all connected nodes in a bigger group',
    async () => {
      const matrix = [
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1]
      ]
      const visitedNodes = new Set<string>()
      const result = dfsTraverse(matrix, 0, 0, visitedNodes)
      const expectedVisited = new Set([
        '0,0',
        '1,0',
        '2,0',
        '1,1',
        '1,2',
        '0,2',
        '2,2'
      ])
      const expectedResult: River = {
        nodes: [
          [0, 0],
          [1, 0],
          [2, 0],
          [1, 1],
          [1, 2],
          [0, 2],
          [2, 2]
        ],
        isIsland: false
      }
      assert.deepStrictEqual(visitedNodes, expectedVisited)
      assert.deepStrictEqual(result, expectedResult)
    }
  )
})

test('getIslands', async (t) => {
  await t.test('should return all islands in a matrix', async () => {
    const matrix = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
    const expected = [{ nodes: [[1, 1]], isIsland: true }]
    const result = getIslands(matrix)
    assert.deepStrictEqual(result, expected)
  })
  await t.test('should return all islands in a bigger matrix', async () => {
    const matrix = [
      [1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 0],
      [1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ]
    const expected = [
      {
        nodes: [
          [1, 1],
          [1, 2],
          [2, 2]
        ],
        isIsland: true
      },
      { nodes: [[3, 3]], isIsland: true }
    ]
    const result = getIslands(matrix)
    assert.deepStrictEqual(result, expected)
  })

  await t.test('should return no islands in a matrix with no 1s', async () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const expected: River[] = []
    const result = getIslands(matrix)
    assert.deepStrictEqual(result, expected)
  })

  await t.test(
    'should return a single island in a matrix with all 1s',
    async () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]
      const expected: River[] = []
      const result = getIslands(matrix)
      assert.deepStrictEqual(result, expected)
    }
  )
  await t.test(
    'should handle special matrix with 1s on [1, 11] and [11, 1]',
    async () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      const expected: River[] = [
        { nodes: [[11, 1]], isIsland: true}
      ]
      const result = getIslands(matrix)
      assert.deepStrictEqual(result, expected)
    }
  )
})

test('removeIslands', async (t) => {
  await t.test('should remove all islands from a matrix', async () => {
    const matrix = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ]
    const expectedMatrix = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ]
    removeIslands(matrix)
    assert.deepStrictEqual(matrix, expectedMatrix)
  })
  await t.test('should remove all islands in a bigger matrix', async () => {
    const matrix = [
      [1, 0, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1]
    ]
    const expected = [
      [1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ]
    removeIslands(matrix)
    assert.deepStrictEqual(matrix, expected)
  })

  await t.test("shouldn't change anything in a matrix with no 1s", async () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    const expected = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
    removeIslands(matrix)
    assert.deepStrictEqual(matrix, expected)
  })

  await t.test(
    "shouldn't change anything in a matrix with all 1s",
    async () => {
      const matrix = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]
      const expected = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]
      removeIslands(matrix)
      assert.deepStrictEqual(matrix, expected)
    }
  )

  await t.test(
    "should handle special matrix with 1s on [1, 11] and [11, 1]",
    async () => {
      const matrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      const expected = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
      removeIslands(matrix)
      assert.deepStrictEqual(matrix, expected)
    }
  )
})
