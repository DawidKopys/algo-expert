import { test } from 'node:test'
import assert from 'node:assert'
import { dfsTraverse } from './dfsTraverse'
import { Vertex } from '../Vertex/Vertex'

test('dfsTraverse', async (t) => {
  const logMessages: any[] = []
  const originalLog = console.log
  console.log = (...args) => logMessages.push(...args)

  t.beforeEach(() => {
    logMessages.length = 0
  })

  t.after(() => {
    console.log = originalLog
  })

  await t.test('traverse a graph with one vertex', () => {
    const vertex = new Vertex('A')
    const visitedVertices = new Set<Vertex>()
    dfsTraverse(vertex, visitedVertices)
    const expected = ['A']
    assert.deepStrictEqual(Array.from(visitedVertices), expected)
  })

  await t.test('visits all vertices in a graph with one vertex', () => {
    const vertex = new Vertex('A')
    dfsTraverse(vertex)
    const expected = ['A']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('traverse a graph with multiple vertices', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    const visitedVertices = new Set<Vertex>()
    dfsTraverse(vertexA, visitedVertices)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(Array.from(visitedVertices), expected)
  })

  await t.test('visits all vertices in a graph with multiple vertices', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    dfsTraverse(vertexA)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('traverse a graph with a cycle', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    vertexC.addAdjecentVertex(vertexA)
    const visitedVertices = new Set<Vertex>()
    dfsTraverse(vertexA, visitedVertices)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(Array.from(visitedVertices), expected)
  })

  await t.test('visits all vertices in a graph with a cycle', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    vertexC.addAdjecentVertex(vertexA)
    dfsTraverse(vertexA)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('traverse a bigger graph', () => {
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
    const visitedVertices = new Set<Vertex>()
    dfsTraverse(alice, visitedVertices)
    const expected = [
      'Alice',
      'Bob',
      'Fred',
      'Helen',
      'Candy',
      'Derek',
      'Gina',
      'Irena',
      'Elaine'
    ]
    assert.deepStrictEqual(Array.from(visitedVertices), expected)
  })

  await t.test('visits all vertices in a bigger graph', () => {
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
    dfsTraverse(alice)
    const expected = [
      'Alice',
      'Bob',
      'Fred',
      'Helen',
      'Candy',
      'Derek',
      'Gina',
      'Irena',
      'Elaine'
    ]
    assert.deepStrictEqual(logMessages, expected)
  })
})
