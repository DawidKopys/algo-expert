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
        this.addAdjecentVertex(vertex)
      }
    } else {
      if (this.adjecentVertices.includes(vertexOrVertices)) return
      this.adjecentVertices.push(vertexOrVertices)
      vertexOrVertices.adjecentVertices.push(this)
    }
  }
}

// const alice = new Vertex('Alice')
// const bob = new Vertex('Bob')
// const cynthia = new Vertex('Cynthia')

// alice.addAdjecentVertex(bob)
// alice.addAdjecentVertex(cynthia)
// bob.addAdjecentVertex(cynthia)
// cynthia.addAdjecentVertex(bob)
