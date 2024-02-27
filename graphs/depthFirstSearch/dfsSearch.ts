import { Vertex } from '../Vertex/Vertex'

export function dfsSearch(
  vertex: Vertex,
  searchValue: any,
  visitedVertices = new Set<Vertex>()
): Vertex | null {
  visitedVertices.add(vertex.value)

  if (vertex.value === searchValue) {
    return vertex
  }

  for (const adjecentVertex of vertex.adjecentVertices) {
    if (visitedVertices.has(adjecentVertex.value)) {
      continue
    }

    const found = dfsSearch(adjecentVertex, searchValue, visitedVertices)

    if (found) {
      return found
    }
  }

  return null
}
