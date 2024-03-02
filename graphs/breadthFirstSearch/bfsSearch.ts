import { Vertex } from "../Vertex/undirectedGraph/Vertex";

export function bfsSearch(vertex: Vertex, searchValue: any): Vertex | null {
  const visitedVertices = new Set<Vertex>()
  const queue: Vertex[] = []
  
  visitedVertices.add(vertex)
  queue.push(vertex)

  while (queue.length > 0) {
    const currentVertex = queue.shift()!

    if (currentVertex.value === searchValue) {
      return currentVertex
    }

    for (const adjecentVertex of currentVertex.adjecentVertices) {
      if (visitedVertices.has(adjecentVertex)) {
        continue
      }

      visitedVertices.add(adjecentVertex)
      queue.push(adjecentVertex)
    }
  }

  return null
}
