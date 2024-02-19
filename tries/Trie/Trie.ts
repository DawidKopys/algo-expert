import { TrieNode } from './TrieNode'

export class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let currentNode: TrieNode = this.root

    for (const character of word) {
      if (!currentNode.children.has(character)) {
        currentNode.children.set(character, new TrieNode())
      }
      currentNode = currentNode.children.get(character)!
    }

    currentNode.children.set('*', null) // mark end of a word
  }

  contains(word: string): boolean {
    let currentNode: TrieNode = this.root

    for (const character of word) {
      if (!currentNode.children.has(character)) {
        return false
      }
      currentNode = currentNode.children.get(character)!
    }

    if (currentNode.children.has('*')) {
      return true
    }

    return false
  }

  search(prefix: string): null | TrieNode {
    let currentNode: TrieNode = this.root

    for (const character of prefix) {
      const childNode = currentNode.children.get(character)
      if (!childNode) {
        return null
      }
      currentNode = childNode
    }

    return currentNode
  }

  collectAllWords(
    node: TrieNode = this.root,
    words: string[] = [],
    word = ''
  ): string[] {
    for (const [character, childNode] of node.children.entries()) {
      if (character === '*') {
        // end of the word
        words.push(word)
      } else {
        this.collectAllWords(childNode!, words, word + character)
      }
    }

    return words
  }

  autocomplete(prefix: string): null | string[] {
    const currentNode = this.search(prefix)
    if (currentNode === null) {
      return null
    }
    return this.collectAllWords(currentNode)
  }

  autocorrect(word: string): string {
    let currentNode: TrieNode | null = this.root
    let correctedWord = ''
    let exactWordFound = true
    let prefixFound = false

    for (const character of word) {
      if (currentNode === null) {
        return correctedWord
      }

      const childNode = currentNode.children.get(character)
      if (!childNode) {
        // that is the end of the longest possible prefix
        exactWordFound = false
        break
      }

      prefixFound = true
      correctedWord = correctedWord + character
      currentNode = childNode
    }

    // the exact word we are trying to correct was found in our trie
    // ... just return it
    if (exactWordFound) {
      return word
    }

    // no word in our trie shares any portion with word we are trying to correct
    // ... return empty string
    if (prefixFound === false) {
      return ''
    }

    // the exact word we are tryign to correct was NOT found in our trie
    // but we have found words with some common prefix - return any of matching words
    while (true) {
      const [key, childNode]: [string, TrieNode | null] = 
        Array.from(currentNode!.children.entries())[0]

      if (key === '*') {
        break
      }

      correctedWord = correctedWord + key
      currentNode = childNode
    }

    return correctedWord
  }

  print(node: TrieNode | null = this.root, prefix = '') {
    if (!node) return

    for (const [char, childNode] of node.children) {
      // check if node is the end of a word
      if (childNode?.children.has('*')) {
        console.log(prefix + char)
      }
      this.print(childNode, prefix + char)
    }
  }

  print2(node: TrieNode | null = this.root, prefix = '') {
    if (!node) return

    for (let [char, childNode] of node.children) {
      console.log(prefix + char)
      this.print2(childNode, prefix + '  ')
    }
  }
}

// tests
// const t = new Trie()
// t.insert('ace')
// t.insert('cat')
// t.insert('can')
// t.insert('caninster')
// t.insert('canal')
// t.insert('catnip')

// console.log()
// t.print()

// tests collectAllWords
// const words = t.collectAllWords()
// console.log('words :', words)

// tests search
// console.log()
// console.log('t.search(`cat`) :', t.search(`cat`))
// console.log('t.search(`car`) :', t.search(`car`))
// console.log('t.search(`can`) :', t.search(`can`))

// tests autocomplete
// console.log()
// const canAutocomplete = t.autocomplete('can')
// console.log('canAutocomplete :', canAutocomplete)
// const catAutocomplete = t.autocomplete('cat')
// console.log('catAutocomplete :', catAutocomplete)
// const caAutocomplete = t.autocomplete('ca')
// console.log('caAutocomplete :', caAutocomplete)

// autocorrect
// const corrected = t.autocorrect('canibal')
// const corrected2 = t.autocorrect('can')
// const corrected3 = t.autocorrect('xxx')
// console.log('corrected :', corrected)
// console.log('corrected2 :', corrected2)
// console.log('corrected3 :', corrected3)
