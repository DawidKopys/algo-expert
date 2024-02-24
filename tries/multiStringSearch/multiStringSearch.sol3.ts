// sol 3 - suffix trie containing strings from smallStrings array
// O(bs + ns) time complexity, where:
// b - length of bigString
// s - average length of string within smallStrings array
// n - number of strings within smallStrings array
// explanation: O(bs + ns + n) -> O(bs + n(s + 1)) -> O(bs + ns)
export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const suffixTrie = new SuffixTrie()

  // 1. add all strings from smallStrings array to a trie
  // O(ns) time complexity, where:
  // n - number of strings within smallStrings array
  // s - average length of string within smallSrings array
  for (const string of smallStrings) {
    // O(s), where s is the average length of strings in the smallStrings array
    suffixTrie.insert(string)
  }
  
  // 2. iterate through bigString's characters
  // ... checking if any suffix is part of our trie
  const containedStrings: ContainedStrings = {}
  // O(bs) time complexity, where:
  // b - length of bigString
  // s - average length of string within smallSrings array
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, suffixTrie, containedStrings)
  }

  // O(n), n - number of strings within smallStrings array
  return smallStrings.map((smallString) => smallString in containedStrings)
}

// would be O(K) time complexity, where K is the length of bigString minus startIdx
// but it is also limited by the length of strings in the trie (from smallStrings array)
// ... sot it is O(s) time complexity, where s is the average length of strings in the trie
function findSmallStringsIn(
  bigString: string,
  startIdx: number,
  trie: SuffixTrie,
  containedStrings: ContainedStrings
) {
  let currentNode = trie.root

  for (let i = startIdx; i < bigString.length; i++) {
    const currentCharacter = bigString[i]
    // check if current node has child node with key equal to current character
    if (!(currentCharacter in currentNode)) {
      break // ... if not - we are done - there is no match
    }
    
    // move current node "forward"
    currentNode = currentNode[currentCharacter] as TrieNode

    if (trie.endSymbol in currentNode) {
      containedStrings[currentNode[trie.endSymbol] as string] = true
    }
  }
}

interface ContainedStrings {
  [key: string]: boolean
}

interface TrieNode {
  // interesting - nodes with '*' have value representing the whole stored word
  // that is why we have the "| string" here
  [key: string]: TrieNode | string
}

class SuffixTrie {
  root: TrieNode
  endSymbol: string
  
  constructor() {
    this.root = {}
    this.endSymbol = '*'
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

    // interesting - nodes with '*' have value representing the whole stored word
    currentNode[this.endSymbol] = string
  }

  // not used in this solution
  // O(K) time complexity, where K is the length of string
  // contains(string: string) {
  //   let currentNode = this.root

  //   for (const character of string) {
  //     if (!(character in currentNode)) {
  //       return false
  //     }
  //     currentNode = currentNode[character] as TrieNode
  //   }

  //   return true
  // }
}
