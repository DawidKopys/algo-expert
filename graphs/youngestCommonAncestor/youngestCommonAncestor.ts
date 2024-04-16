// This is an input class. Do not edit.
export class AncestralTree {
  name: string
  ancestor: AncestralTree | null

  constructor(name: string) {
    this.name = name
    this.ancestor = null
  }
}

// sol 1 - my sol
// just go up the ancestral tree for one descendant, adding all its descendants to a set,
// then go up the tree for descendant two, for each ancestor check if it is in the above set
// ... if it is - return current node
// O(d) time, O(N) space
// ... there is a better solution with O(d) time and O(1) space
// ... but it's not that interesting so I am skipping it
export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree
) {
  const nodeOneAncestors = new Set<AncestralTree>()
  let currentNode: AncestralTree | null = descendantOne
  while (currentNode !== null) {
    nodeOneAncestors.add(currentNode)
    currentNode = currentNode.ancestor
  }

  let currentNodeTwo: AncestralTree | null = descendantTwo

  while (currentNodeTwo !== null) {
    if (nodeOneAncestors.has(currentNodeTwo)) {
      return currentNodeTwo
    }

    currentNodeTwo = currentNodeTwo.ancestor
  }

  return topAncestor
}
