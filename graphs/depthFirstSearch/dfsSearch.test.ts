import { test } from 'node:test'
import assert from 'node:assert'
import { dfsSearch } from './dfsSearch'
import { Vertex } from '../Vertex/Vertex'

test('dfsSearch', async (t) => {
  await t.test('search a graph with one vertex', () => {
    const vertex = new Vertex('A')
    const found = dfsSearch(vertex, 'A')
    assert.strictEqual(found, vertex)
  })

  await t.test('search a graph with multiple vertices', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    const found = dfsSearch(vertexA, 'C')
    assert.strictEqual(found, vertexC)
  })

  await t.test('search a graph with a cycle', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    vertexC.addAdjecentVertex(vertexA)
    const found = dfsSearch(vertexA, 'C')
    assert.strictEqual(found, vertexC)
  })

  await t.test('search a graph for a non-existent vertex', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    const found = dfsSearch(vertexA, 'D')
    assert.strictEqual(found, null)
  })

  await t.test('search a bigger graph', () => {
    const alice = new Vertex('Alice')
    const bob = new Vertex('Bob')
    const candy = new Vertex('Candy')
    const derek = new Vertex('Derek')
    const elaine = new Vertex('Elaine')
    const fred = new Vertex('Fred')
    const helen = new Vertex('Helen')
    const gina = new Vertex('Gina')
    const irena = new Vertex('Irena')
    alice.addAdjecentVertex([bob, candy, derek, elaine])
    bob.addAdjecentVertex(fred)
    fred.addAdjecentVertex(helen)
    helen.addAdjecentVertex(candy)
    derek.addAdjecentVertex([gina, elaine])
    gina.addAdjecentVertex(irena)
    const found = dfsSearch(alice, 'Gina')
    assert.strictEqual(found, gina)
  })
})
