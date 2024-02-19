export class TrieNode {
  children: Map<string, TrieNode | null>

  constructor() {
    this.children = new Map()
  }
}
