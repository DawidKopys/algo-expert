interface TrieNode {
  [key: string]: TrieNode | boolean
}

export class SuffixTrie {
  root: TrieNode
  endSymbol: string

  constructor()
  constructor(string: string)
  constructor(string?: string) {
    this.root = {}
    this.endSymbol = '*'
    if (string) {
      this.populateSuffixTrieFrom(string)
    }
  }

  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      this.insert(string.slice(i))
    }
  }

  insert(string: string) {
    let currentNode = this.root

    for (const character of string) {
      if (!(character in currentNode)) {
        currentNode[character] = {}
      }
      currentNode = currentNode[character] as TrieNode
    }

    currentNode['*'] = true
  }

  contains(string: string) {
    let currentNode = this.root

    for (const character of string) {
      if (!(character in currentNode)) {
        return false
      }
      currentNode = currentNode[character] as TrieNode
    }

    if (currentNode['*'] === true) {
      return true
    }

    return false
  }
}
