import { Vertex } from "../Vertex/Vertex";

export function bfsTraverse(vertex: Vertex) {
  const visitedVertices = new Set<Vertex>()
  const queue: Vertex[] = []
  
  visitedVertices.add(vertex)
  queue.push(vertex)

  while (queue.length > 0) {
    const currentVertex = queue.shift()!

    console.log(currentVertex.value) // visit

    for (const adjecentVertex of currentVertex.adjecentVertices) {
      if (visitedVertices.has(adjecentVertex)) {
        continue
      }

      visitedVertices.add(adjecentVertex)
      queue.push(adjecentVertex)
    }
  }
}
