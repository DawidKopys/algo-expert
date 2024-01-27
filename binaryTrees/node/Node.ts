class Node<T = number> {
  value: T
  left: Node<T> | null
  right: Node<T> | null

  constructor(
    value: T,
    left: Node<T> | null = null,
    right: Node<T> | null = null
  ) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export { Node }
