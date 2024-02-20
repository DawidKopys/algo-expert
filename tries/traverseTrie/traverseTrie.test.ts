import { test } from 'node:test'
import assert from 'node:assert'
import { Trie } from '../Trie/Trie'
import { traverseTrie } from './traverseTrie'

test('traverseTrie function', async (t) => {
  await t.test('with single word', () => {
    const trie = new Trie()
    trie.insert('test')
    const result = traverseTrie(trie)
    assert.deepStrictEqual(result, ['t', 'e', 's', 't', '*'])
  })

  await t.test('with multiple words', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = traverseTrie(trie)
    assert.deepStrictEqual(result, ['t', 'e', 's', 't', '*', 'i', 'n', 'g', '*', 'e', 'r', '*'])
  })

  await t.test('with no words', () => {
    const trie = new Trie()
    const result = traverseTrie(trie)
    assert.deepStrictEqual(result, [])
  })
})