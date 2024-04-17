import { test } from 'node:test'
import assert from 'node:assert'
import { isStartOfCycle, cycleInGraph } from './cycleInGraph.sol1'

test.only('isStartOfCycle', async (t) => {
  // this test case shows difference between sol1 and sol2
  // in sol1, isStartOfCycle only checks if start node is a start of a cycle
  // ... so it returns false in below test case
  // in sol2, nodeHasCycle checks if there is a cycle in start node's descendants tree
  // ... so it returns true in below test case
  await t.test('returns false when there is no cycle starting from node 0', () => {
    const edges = [[1], [2], [3], [4], [1]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, false)
  })

  await t.test('returns true when there is a cycle starting from node 0', () => {
    const edges = [[1], [2], [3], [4], [0]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, true)
  })

  await t.test('returns true when there is a shorter cycle not starting from node 0', () => {
    const edges = [[1], [2], [0], [4], [1]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, true)
  })
  
  await t.test('returns true when there is a cycle with multiple edges from a node', () => {
    const edges = [[1, 3], [2], [3], [4], [0]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, true)
  })

  await t.test('returns false when there are no edges', () => {
    const edges: number[][] = [[], [], [], [], []]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, false)
  })

  await t.test('returns false when there is only one node with no edges', () => {
    const edges: number[][] = [[]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, false)
  })

  await t.test('returns true when there is only one node with an edge to itself', () => {
    const edges: number[][] = [[0]]
    const hasCycle = isStartOfCycle(0, edges)
    assert.strictEqual(hasCycle, true)
  })
})

test('cycleInGraph sol1', async (t) => {
  await t.test('should return true when a cycle exists in the graph', () => {
    const edges = [[1], [2], [0], [4], [1]]
    const hasCycle = cycleInGraph(edges)
    assert.strictEqual(hasCycle, true)
  })

  await t.test(
    'should return true when a bigger cycle exists in the graph',
    () => {
      const edges = [[1], [2], [3], [4], [0]]
      const hasCycle = cycleInGraph(edges)
      assert.strictEqual(hasCycle, true)
    }
  )

  await t.test(
    'should return true when a cycle exists in the graph with multiple edges from a node',
    () => {
      const edges = [[1, 3], [2], [3], [4], [0]]
      const hasCycle = cycleInGraph(edges)
      assert.strictEqual(hasCycle, true)
    }
  )

  await t.test('should return false when no cycle exists in the graph', () => {
    const edges: number[][] = [[], [], [], [], []]
    const hasCycle = cycleInGraph(edges)
    assert.strictEqual(hasCycle, false)
  })

  await t.test(
    'should return false when the graph has only one node with no edges',
    () => {
      const edges: number[][] = [[]]
      const hasCycle = cycleInGraph(edges)
      assert.strictEqual(hasCycle, false)
    }
  )

  await t.test(
    'should return true when the graph has only one node with an edge to itself',
    () => {
      const edges: number[][] = [[0]]
      const hasCycle = cycleInGraph(edges)
      assert.strictEqual(hasCycle, true)
    }
  )
})
