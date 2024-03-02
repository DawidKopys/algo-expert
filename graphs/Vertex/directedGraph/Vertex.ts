export class Vertex {
  value: any
  adjecentVertices: Vertex[]

  constructor(value: any) {
    this.value = value
    this.adjecentVertices = []
  }

  addAdjecentVertex(vertices: Vertex[]): void
  addAdjecentVertex(vertex: Vertex): void
  addAdjecentVertex(vertexOrVertices: Vertex | Vertex[]) {
    if (Array.isArray(vertexOrVertices)) {
      for (const vertex of vertexOrVertices) {
        this._addAdjecentVertex(vertex)
      }
    } else {
      this._addAdjecentVertex(vertexOrVertices)
    }
  }

  private _addAdjecentVertex(vertex: Vertex) {
    this.adjecentVertices.push(vertex)
  
  }
}
