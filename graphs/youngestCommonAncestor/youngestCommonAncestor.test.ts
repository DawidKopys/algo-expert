import { test } from 'node:test'
import assert from 'node:assert'
import {
  getYoungestCommonAncestor,
  AncestralTree
} from './youngestCommonAncestor'

test('getYoungestCommonAncestor', async (t) => {
  await t.test(
    'should return topAncestor when both descendants are the topAncestor',
    async () => {
      const topAncestor = new AncestralTree('A')
      const expected = topAncestor
      const result = getYoungestCommonAncestor(
        topAncestor,
        topAncestor,
        topAncestor
      )
      assert.strictEqual(result, expected)
    }
  )

  await t.test(
    'should return the common ancestor of two descendants',
    async () => {
      const topAncestor = new AncestralTree('A')
      const descendantOne = new AncestralTree('B')
      const descendantTwo = new AncestralTree('C')
      descendantOne.ancestor = topAncestor
      descendantTwo.ancestor = topAncestor
      const expected = topAncestor
      const result = getYoungestCommonAncestor(
        topAncestor,
        descendantOne,
        descendantTwo
      )
      assert.strictEqual(result, expected)
    }
  )

  await t.test(
    'should return the youngest common ancestor of two descendants',
    async () => {
      const topAncestor = new AncestralTree('A')
      const descendantOne = new AncestralTree('B')
      const descendantTwo = new AncestralTree('C')
      const commonAncestor = new AncestralTree('D')
      descendantOne.ancestor = commonAncestor
      descendantTwo.ancestor = commonAncestor
      commonAncestor.ancestor = topAncestor
      const expected = commonAncestor
      const result = getYoungestCommonAncestor(
        topAncestor,
        descendantOne,
        descendantTwo
      )
      assert.strictEqual(result, expected)
    }
  )

  await t.test(
    'should return the topAncestor when one descendant is the ancestor of the other',
    async () => {
      const topAncestor = new AncestralTree('A')
      const descendantOne = new AncestralTree('B')
      descendantOne.ancestor = topAncestor
      const expected = topAncestor
      const result = getYoungestCommonAncestor(
        topAncestor,
        descendantOne,
        topAncestor
      )
      assert.strictEqual(result, expected)
    }
  )
})
