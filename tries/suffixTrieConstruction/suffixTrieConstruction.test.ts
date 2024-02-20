import { test } from 'node:test'
import assert from 'node:assert'
import { SuffixTrie } from './suffixTrieConstruction'

test.only('SuffixTrie', async (t) => {
  await t.test('constructor with no arguments', () => {
    const trie = new SuffixTrie()
    assert.deepStrictEqual(trie.root, {})
  })

  await t.test('constructor with a string argument', () => {
    const trie = new SuffixTrie('test')
    const expected = {
      t: {
        e: {
          s: {
            t: {
              '*': true
            },
          },
        },
        '*': true
      },
      e: {
        s: {
          t: {
            '*': true
          },
        },
      },
      s: {
        t: {
          '*': true
        },
      }
    }
    assert.deepStrictEqual(trie.root, expected)
  })

  await t.test('populateSuffixTrieFrom method', () => {
    const trie = new SuffixTrie()
    trie.populateSuffixTrieFrom('test')
    const expected = {
      t: {
        e: {
          s: {
            t: {
              '*': true
            },
          },
        },
        '*': true
      },
      e: {
        s: {
          t: {
            '*': true
          },
        },
      },
      s: {
        t: {
          '*': true
        },
      }
    }
    assert.deepStrictEqual(trie.root, expected)
  })

  await t.test('insert method', () => {
    const trie = new SuffixTrie()
    trie.insert('test')
    const expected = {
      t: {
        e: {
          s: {
            t: {
              '*': true
            }
          }
        }
      }
    }
    assert.deepStrictEqual(trie.root, expected)
  })

  await t.test('contains method', () => {
    const trie = new SuffixTrie('test')
    assert.strictEqual(trie.contains('test'), true)
    assert.strictEqual(trie.contains('tes'), false)
    assert.strictEqual(trie.contains('te'), false)
    assert.strictEqual(trie.contains('t'), true)
    assert.strictEqual(trie.contains('est'), true)
    assert.strictEqual(trie.contains('st'), true)
    assert.strictEqual(trie.contains('no'), false)
  })
})
