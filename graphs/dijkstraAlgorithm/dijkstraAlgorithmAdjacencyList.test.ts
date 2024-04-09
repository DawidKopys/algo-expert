// FILEPATH: /Users/dawidkopys/Workspace/playground/algo-expert/graphs/dijkstraAlgorithm/dijkstraAlgorithmAdjacencyList.test.ts

import { test } from 'node:test'
import assert from 'node:assert'
import { dijkstrasAlgorithm } from './dijkstraAlgorithmAdjacencyList'

test('dijkstrasAlgorithm', async (t) => {
  await t.test('find shortest paths in a graph with one vertex', () => {
    const start = 0
    const edges = [[[]]]

    const result = dijkstrasAlgorithm(start, edges)
    const expected = [0]

    assert.deepStrictEqual(result, expected)
  })

  await t.test('find shortest paths in a graph with multiple vertices', () => {
    const start = 0
    const edges = [
      [
        [1, 1],
        [2, 3]
      ],
      [[2, 1]],
      []
    ]

    const result = dijkstrasAlgorithm(start, edges)
    const expected = [0, 1, 2]

    assert.deepStrictEqual(result, expected)
  })

  await t.test('find shortest paths in a graph with multiple paths', () => {
    const start = 0
    const edges = [
      [
        [1, 1],
        [2, 5]
      ],
      [[2, 2]],
      []
    ]

    const result = dijkstrasAlgorithm(start, edges)
    const expected = [0, 1, 3]

    assert.deepStrictEqual(result, expected)
  })

  await t.test(
    'find shortest paths in a graph with unreachable vertices',
    () => {
      const start = 0
      const edges = [[[1, 1]], [], []]

      const result = dijkstrasAlgorithm(start, edges)
      const expected = [0, 1, -1]

      assert.deepStrictEqual(result, expected)
    }
  )

  await t.test(
    'find shortest paths in a bigger graph with unreachable vertices',
    () => {
      const start = 0
      const edges = [
        [[1, 7]],
        [
          [2, 6],
          [3, 20],
          [4, 3]
        ],
        [[3, 14]],
        [[4, 2]],
        [],
        []
      ]
      const result = dijkstrasAlgorithm(start, edges)
      const expected = [0, 7, 13, 27, 10, -1]

      assert.deepStrictEqual(result, expected)
    }
  )
})
