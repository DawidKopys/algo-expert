import { test } from 'node:test'
import assert from 'node:assert'
import {
  dijkstraShortestPaths,
  getShortestPath
} from './dijkstraAlgorithmPredecessors'
import { WeightedGraphVertex } from '../Vertex/directedGraph/WeightedGraphVertex'

test('dijkstra algorithm', async (t) => {
  await t.test('dijkstraShortestPaths', async (t) => {
    await t.test('find shortest paths in a graph with one vertex', () => {
      const vertex = new WeightedGraphVertex('A')
  
      const result = dijkstraShortestPaths(vertex)
  
      assert.strictEqual(result.distances.get(vertex), 0)
      assert.strictEqual(result.predecessors.get(vertex), undefined)
    })
  
    await t.test('find shortest paths in a graph with multiple vertices', () => {
      const vertexA = new WeightedGraphVertex('A')
      const vertexB = new WeightedGraphVertex('B')
      const vertexC = new WeightedGraphVertex('C')
      vertexA.addAdjecentVertex(vertexB, 1)
      vertexB.addAdjecentVertex(vertexC, 1)
  
      const result = dijkstraShortestPaths(vertexA)
  
      assert.strictEqual(result.distances.get(vertexC), 2)
      assert.strictEqual(result.predecessors.get(vertexC), vertexB)
    })
  
    await t.test('find shortest paths in a graph with multiple vertices', () => {
      const atlanta = new WeightedGraphVertex('Atlanta')
      const boston = new WeightedGraphVertex('Boston')
      const chicago = new WeightedGraphVertex('Chicago')
      const denver = new WeightedGraphVertex('Denver')
      const elPaso = new WeightedGraphVertex('El Paso')
      atlanta.addAdjecentVertex(boston, 100)
      atlanta.addAdjecentVertex(denver, 160)
      boston.addAdjecentVertex(chicago, 120)
      boston.addAdjecentVertex(denver, 180)
      chicago.addAdjecentVertex(elPaso, 80)
      denver.addAdjecentVertex(chicago, 40)
      denver.addAdjecentVertex(elPaso, 140)
      elPaso.addAdjecentVertex(atlanta, 100)
  
      const result = dijkstraShortestPaths(atlanta)
  
      assert.strictEqual(result.distances.get(elPaso), 280)
      assert.strictEqual(result.predecessors.get(elPaso), chicago)
    })
  })
  
  await t.test('getShortestPath', async (t) => {
    await t.test('find shortest path in a graph with one vertex', () => {
      const vertex = new WeightedGraphVertex('A')
  
      const result = getShortestPath(vertex, vertex)
  
      assert.deepStrictEqual(result, [vertex.value])
    })
  
    await t.test('find shortest path in a graph with multiple vertices', () => {
      const vertexA = new WeightedGraphVertex('A')
      const vertexB = new WeightedGraphVertex('B')
      const vertexC = new WeightedGraphVertex('C')
      vertexA.addAdjecentVertex(vertexB, 1)
      vertexB.addAdjecentVertex(vertexC, 1)
  
      const result = getShortestPath(vertexA, vertexC)
  
      assert.deepStrictEqual(result, [
        vertexA.value,
        vertexB.value,
        vertexC.value
      ])
    })
  
    await t.test('find shortest path in a graph with multiple vertices', () => {
      const atlanta = new WeightedGraphVertex('Atlanta')
      const boston = new WeightedGraphVertex('Boston')
      const chicago = new WeightedGraphVertex('Chicago')
      const denver = new WeightedGraphVertex('Denver')
      const elPaso = new WeightedGraphVertex('El Paso')
  
      atlanta.addAdjecentVertex(boston, 100)
      atlanta.addAdjecentVertex(denver, 160)
      boston.addAdjecentVertex(chicago, 120)
      boston.addAdjecentVertex(denver, 180)
      chicago.addAdjecentVertex(elPaso, 80)
      denver.addAdjecentVertex(chicago, 40)
      denver.addAdjecentVertex(elPaso, 140)
      elPaso.addAdjecentVertex(atlanta, 100)
  
      const result = getShortestPath(atlanta, elPaso)
  
      assert.deepStrictEqual(result, [
        atlanta.value,
        denver.value,
        chicago.value,
        elPaso.value
      ])
    })
  })
})

