import { test } from 'node:test'
import assert from 'node:assert'
import { Trie } from './Trie'

test('Trie class', async (t) => {
  await t.test('insert method', () => {
    const trie = new Trie()
    trie.insert('test')
    const result = trie.root.children.has('t')
    assert.strictEqual(result, true)
  })

  await t.test('contains method - positive', () => {
    const trie = new Trie()
    trie.insert('test')
    const result = trie.contains('test')
    assert.strictEqual(result, true)
  })

  await t.test('contains method - negative', () => {
    const trie = new Trie()
    trie.insert('foobar')
    const result = trie.contains('test')
    assert.strictEqual(result, false)
  })

  await t.test('autocomplete method', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = trie.autocomplete('test')
    assert.deepStrictEqual(result, ['', 'ing', 'er'])
  })

  await t.test('search method', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = trie.search('test')
    assert.strictEqual(3, result?.children.size)
    assert.strictEqual(true, result?.children.has('*'))
    assert.strictEqual(true, result?.children.has('i'))
    assert.strictEqual(true, result?.children.has('e'))
  })

  await t.test('collectAllWords method', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('foobar')
    const result = trie.collectAllWords()
    assert.deepStrictEqual(result, ['test', 'testing', 'foobar'])
  })

  await t.test('autocorrect method', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = trie.autocorrect('time')
    assert.strictEqual(true, ['test', 'testing', 'tester'].includes(result))
  })

  await t.test('autocorrect method - with matching word', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = trie.autocorrect('test')
    assert.strictEqual(true, ['test', 'testing', 'tester'].includes(result))
  })

  await t.test('autocorrect method - no match found', () => {
    const trie = new Trie()
    trie.insert('test')
    trie.insert('testing')
    trie.insert('tester')
    const result = trie.autocorrect('xxx')
    assert.strictEqual('', result)
  })
})
