// sol 2 - suffix trie built from bigString
// 1. populate suffix trie with big string
// 2. iterate over strings in smallString and check if trie contains them
// O(N^2 + P*M), where:
// N - length of bigString
// P - length of smallStrings
// M - length of each string within smallStrings
// ... which - knowing that P * M < N - we can further simplify to:
// O(N^2 + N^2) -> O(2*N^2) -> O(N^2)
export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const suffixTrie = new SuffixTrie(bigString) // O(N^2), where N is the length of bigString
  
  const resultArr: boolean[] = []
  for (const smallString of smallStrings) { // O(P), where P is the number of stings in smallStrings array
    resultArr.push(suffixTrie.contains(smallString)) // O(M), where M is the length of M
  }

  return resultArr
}

interface TrieNode {
  [key: string]: TrieNode | boolean
}

class SuffixTrie {
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

  // O(K^2) time complexity, where K is the length of a string
  populateSuffixTrieFrom(string: string) {
    for (let i = 0; i < string.length; i++) {
      this.insert(string.slice(i))
    }
  }

  // O(K) time complexity, where K is the length of string
  insert(string: string) {
    let currentNode = this.root

    for (const character of string) {
      if (!(character in currentNode)) {
        currentNode[character] = {}
      }
      currentNode = currentNode[character] as TrieNode
    }

    currentNode[this.endSymbol] = true
  }

  // O(K) time complexity, where K is the length of string
  contains(string: string) {
    let currentNode = this.root

    for (const character of string) {
      if (!(character in currentNode)) {
        return false
      }
      currentNode = currentNode[character] as TrieNode
    }

    return true
  }
}
