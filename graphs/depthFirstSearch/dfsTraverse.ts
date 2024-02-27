import { Vertex } from "../Vertex/Vertex";

export function dfsTraverse(vertex: Vertex, visitedVertices = new Set<Vertex>()) {
  visitedVertices.add(vertex.value)

  console.log(vertex.value) // visit

  for (const adjecentVertex of vertex.adjecentVertices) {
    if (visitedVertices.has(adjecentVertex.value)) {
      continue
    }

    dfsTraverse(adjecentVertex, visitedVertices)
  }
}
