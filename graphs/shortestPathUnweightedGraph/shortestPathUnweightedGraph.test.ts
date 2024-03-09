import { test } from 'node:test'
import assert from 'node:assert'
import { getShortestPath as sol1 } from './dijkstraUnweighted'
import { findShortestPathDfs as sol2 } from './findShortestPathDfs'
import { Vertex } from '../Vertex/undirectedGraph/Vertex'

const solutions = [sol1, sol2]

solutions.forEach((sol, idx) => {
  test.only(`${sol.name}`, async (t) => {
    await t.test('find shortest path in a graph with one vertex', () => {
      const vertex = new Vertex('A')
  
      const path = sol(vertex, vertex)
      const expected = [vertex.value]
  
      assert.deepStrictEqual(path, expected)
    })
  
    await t.test('find shortest path in a graph with multiple vertices', () => {
      const vertexA = new Vertex('A')
      const vertexB = new Vertex('B')
      const vertexC = new Vertex('C')
      vertexA.addAdjecentVertex(vertexB)
      vertexB.addAdjecentVertex(vertexC)
  
      const path = sol(vertexA, vertexC)
      const expected = [vertexA.value, vertexB.value, vertexC.value]
  
      assert.deepStrictEqual(path, expected)
    })
  
    await t.test(
      'find shortest path in a graph with multiple vertices and multiple paths',
      () => {
        const vertexA = new Vertex('A')
        const vertexB = new Vertex('B')
        const vertexC = new Vertex('C')
        const vertexD = new Vertex('D')
        vertexA.addAdjecentVertex(vertexB)
        vertexA.addAdjecentVertex(vertexC)
        vertexB.addAdjecentVertex(vertexD)
        vertexC.addAdjecentVertex(vertexD)
  
        const path = sol(vertexA, vertexD)
        const expected = [vertexA.value, vertexB.value, vertexD.value]
  
        assert.deepStrictEqual(path, expected)
      }
    )
  
    await t.test(
      'find shortest path in a bigger graph',
      () => {
        const idris = new Vertex('Idris')
        const kamil = new Vertex('Kamil')
        const lina = new Vertex('Lina')
        const sasha = new Vertex('Sasha')
        const marco = new Vertex('Marco')
        const ken = new Vertex('Ken')
        const talia = new Vertex('Talia')
        idris.addAdjecentVertex([kamil, talia])
        lina.addAdjecentVertex([kamil, sasha])
        marco.addAdjecentVertex([sasha, ken])
        ken.addAdjecentVertex(talia)
        
  
        const path = sol(idris, lina)
        const expected = [idris.value, kamil.value, lina.value]
  
        assert.deepStrictEqual(path, expected)
      }
    )
  })
})

