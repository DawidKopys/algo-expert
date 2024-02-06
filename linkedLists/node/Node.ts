class Node {
  value: number
  next: Node | null

  constructor (value: number) {
    this.value = value
    this.next = null
  }
}

export { Node }
