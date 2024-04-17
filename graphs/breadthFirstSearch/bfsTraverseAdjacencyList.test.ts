import { test } from 'node:test'
import assert from 'node:assert'
import { bfsTraverse } from './bfsTraverseAdjacencyList'

test('bfsTraverse (with adjacency list)', async (t) => {
  await t.test('traverses graph correctly', () => {
    const edges = [[1, 3], [2], [3], [4], []]
    const result: number[] = []
    const consoleLog = console.log
    console.log = (v: any) => result.push(v)
    bfsTraverse(0, edges)
    console.log = consoleLog
    assert.deepStrictEqual(result, [0, 1, 3, 2, 4])
  })

  await t.test('traverses graph with cycle correctly', () => {
    const edges = [[1, 3], [2], [3], [4], [0]]
    const result: number[] = []
    const consoleLog = console.log
    console.log = (v: any) => result.push(v)
    bfsTraverse(0, edges)
    console.log = consoleLog
    assert.deepStrictEqual(result, [0, 1, 3, 2, 4])
  })

  await t.test('handles a disconnected graph with no edges', () => {
    const edges: number[][] = [[], [], [], [], []]
    const result: number[] = []
    const consoleLog = console.log
    console.log = (v: any) => result.push(v)
    bfsTraverse(0, edges)
    console.log = consoleLog
    assert.deepStrictEqual(result, [0])
  })

  await t.test('handles a graph with one node', () => {
    const edges: number[][] = [[]]
    const result: number[] = []
    const consoleLog = console.log
    console.log = (v: any) => result.push(v)
    bfsTraverse(0, edges)
    console.log = consoleLog
    assert.deepStrictEqual(result, [0])
  })

  await t.test('handles a graph with one node that forms a cycle', () => {
    const edges: number[][] = [[0]]
    const result: number[] = []
    const consoleLog = console.log
    console.log = (v: any) => result.push(v)
    bfsTraverse(0, edges)
    console.log = consoleLog
    assert.deepStrictEqual(result, [0])
  })
})
