import { Trie } from '../Trie/Trie'
import { TrieNode } from '../Trie/TrieNode'

export function traverseTrie(trie: Trie) {
  return _traverseTrie(trie.root, [])
}

export function _traverseTrie(node: TrieNode, keysAcc: string[] = []) {
  for (const [key, childNode] of node.children) {
    keysAcc.push(key)
    if (childNode) {
      _traverseTrie(childNode, keysAcc)
    }
  }
  return keysAcc
}

// const t = new Trie()
// t.insert('get')
// t.insert('go')
// t.insert('got')
// t.insert('gotten')
// t.insert('hall')
// t.insert('ham')
// t.insert('hammer')
// t.insert('hill')
// t.insert('zebra')

// const words = t.collectAllWords()
// console.log('words :', words)

// const keys = traverseTrie(t)
// console.log('keys :', keys)
