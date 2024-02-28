import { test } from 'node:test'
import assert from 'node:assert'
import { bfsTraverse } from './bfsTraverse'
import { Vertex } from '../Vertex/Vertex'

test('bfsTraverse', async (t) => {
  const logMessages: any[] = []
  const originalLog = console.log
  console.log = (...args) => logMessages.push(...args)

  t.beforeEach(() => {
    logMessages.length = 0
  })

  t.after(() => {
    console.log = originalLog
  })

  await t.test('visits all vertices in a graph with one vertex', () => {
    const vertex = new Vertex('A')
    bfsTraverse(vertex)
    const expected = ['A']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('visits all vertices in a graph with multiple vertices', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    bfsTraverse(vertexA)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('visits all vertices in a graph with a cycle', () => {
    const vertexA = new Vertex('A')
    const vertexB = new Vertex('B')
    const vertexC = new Vertex('C')
    vertexA.addAdjecentVertex(vertexB)
    vertexB.addAdjecentVertex(vertexC)
    vertexC.addAdjecentVertex(vertexA)
    bfsTraverse(vertexA)
    const expected = ['A', 'B', 'C']
    assert.deepStrictEqual(logMessages, expected)
  })

  await t.test('visits all vertices a bigger graph', () => {
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
    bfsTraverse(alice)
    const expected = ['Alice', 'Bob', 'Candy', 'Derek', 'Elaine', 'Fred', 'Helen', 'Gina', 'Irena']
    assert.deepStrictEqual(logMessages, expected)
  })
})
