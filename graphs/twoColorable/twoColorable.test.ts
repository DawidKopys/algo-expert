import { test } from 'node:test'
import { strict as assert } from 'node:assert'
import { twoColorable } from './twoColorable'

test.only('twoColorable function', async () => {
  await test('graph with one node is two colorable', async () => {
    const graph = [[]]
    const result = twoColorable(graph)
    assert.equal(result, true)
  })

  await test('graph with one node, with self loop, is not two colorable', async () => {
    const graph = [[0]]
    const result = twoColorable(graph)
    assert.equal(result, false)
  })

  await test('graph with 3 nodes is two colorable', async () => {
    const graph = [[1], [0, 2], [1]]
    const result = twoColorable(graph)
    assert.equal(result, true)
  })

  await test('graph with 3 nodes and a self loop is not two colorable', async () => {
    const graph = [[1], [0, 2], [1, 2]]
    const result = twoColorable(graph)
    assert.equal(result, false)
  })

  await test('graph with 3 nodes forming a loop is not two colorable', async () => {
    const graph = [[1], [2], [0]]
    const result = twoColorable(graph)
    assert.equal(result, false)
  })

  await test('graph with 2 connected nodes is two colorable', async () => {
    const graph = [[1], [0]]
    const result = twoColorable(graph)
    assert.equal(result, true)
  })

  await test('graph with 3 nodes and no loops is two colorable', async () => {
    const graph = [[1], [0, 2], [1]]
    const result = twoColorable(graph)
    assert.equal(result, true)
  })

  await test('graph with 4 nodes and no loops is two colorable', async () => {
    const graph = [
      [1, 3],
      [0, 2],
      [1, 3],
      [0, 2]
    ]
    const result = twoColorable(graph)
    assert.equal(result, true)
  })
})
