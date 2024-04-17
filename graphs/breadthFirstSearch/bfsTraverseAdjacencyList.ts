export function bfsTraverse(startNodeIndex: number, edges: number[][]) {
  const queue = [startNodeIndex]
  const visitedNodes = new Set([startNodeIndex])

  while (queue.length > 0) {
    const currentNodeIndex = queue.pop()!

    console.log(currentNodeIndex)

    // add all neighbours to the queue
    for (const neighbourIndex of edges[currentNodeIndex]) {
      if (visitedNodes.has(neighbourIndex)) {
        continue
      }

      visitedNodes.add(currentNodeIndex)
      queue.unshift(neighbourIndex)
    }
  }
}
