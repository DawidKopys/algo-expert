type NewEdge = [WeightedGraphVertex, number]

export class WeightedGraphVertex {
  value: any
  adjecentVertices: Map<WeightedGraphVertex, number>

  constructor(value: any) {
    this.value = value
    this.adjecentVertices = new Map()
  }

  addAdjecentVertex(edges: NewEdge[]): void
  addAdjecentVertex(vertex: WeightedGraphVertex, weight: number): void
  addAdjecentVertex(vertexOrEdges: WeightedGraphVertex | NewEdge[], weight?: number) {
    if (Array.isArray(vertexOrEdges)) {
      for (const [vertex, number] of vertexOrEdges) {
        this._addAdjecentVertex(vertex, number)
      }
    } else {
      this._addAdjecentVertex(vertexOrEdges, weight!)
    }
  }

  private _addAdjecentVertex(vertex: WeightedGraphVertex, weight: number) {
    this.adjecentVertices.set(vertex, weight)
  }
}
