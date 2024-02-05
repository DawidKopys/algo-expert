import { heapToString } from '../util/heapToString'

export class MinHeap {
  heap: number[]

  constructor()
  constructor(array: number[])
  constructor(array?: number[]) {
    if (array) {
      this.heap = this.buildHeap(array)
    } else {
      this.heap = []
    }
  }

  buildHeap(array: number[]) {
    const heap = new MinHeap()
    for (const num of array) {
      heap.insert(num)
    }
    return heap.heap
  }

  siftDown() {
    // trickle down
    let trickleNodeIndex = 0

    while (true) {
      const smallerChildIndex = this.getSmallerChildIndex(trickleNodeIndex)

      // there is no smaller child -> there are no children -> we are done
      if (smallerChildIndex === null) break

      // compare tricle node with smaller child
      if (this.heap[trickleNodeIndex] > this.heap[smallerChildIndex]) {
        // swap trickle node with smaller child
        ;[this.heap[trickleNodeIndex], this.heap[smallerChildIndex]] = [
          this.heap[smallerChildIndex],
          this.heap[trickleNodeIndex]
        ]

        // update trickle node index
        trickleNodeIndex = smallerChildIndex
      } else {
        // trickle node is smaller than its children -> we are done
        break
      }
    }
  }

  siftUp() {
    // trickle up
    let trickleNodeIndex = this.heap.length - 1

    while (trickleNodeIndex > 0) {
      const parentIndex = MinHeap.getParentIndex(trickleNodeIndex)

      const trickleNodeValue = this.heap[trickleNodeIndex]
      const parentNodeValue = this.heap[parentIndex]

      if (parentNodeValue > trickleNodeValue) {
        // swap parent with trickle node
        ;[this.heap[trickleNodeIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[trickleNodeIndex]
        ]

        trickleNodeIndex = parentIndex
      } else {
        break
      }
    }
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    // keep removed node value to return it at the end of this funciton
    const valueToRemove = this.heap[0]

    // 1. replace root node with last node
    this.heap[0] = this.lastNode
    this.heap.pop()

    // 2. trickle down
    this.siftDown()

    return valueToRemove
  }

  insert(value: number) {
    // 1. insert new node as the new last node
    this.heap.push(value)

    // 2. trickle up
    this.siftUp()
  }

  get lastNode(): number {
    return this.heap[this.heap.length - 1]
  }

  static getParentIndex(index: number): number {
    return Math.trunc((index - 1) / 2)
  }

  static getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  static getRightChildIndex(index: number): number {
    return index * 2 + 2
  }

  private getSmallerChildIndex(index: number): number | null {
    const leftChildIndex = MinHeap.getLeftChildIndex(index)
    const rightChildIndex = MinHeap.getRightChildIndex(index)

    if (this.heap[leftChildIndex] && this.heap[rightChildIndex]) {
      // both children exist -> pick smaller
      const smallerChild =
        this.heap[leftChildIndex] > this.heap[rightChildIndex]
          ? rightChildIndex
          : leftChildIndex

      return smallerChild
    }

    // one child -> return the only child
    if (this.heap[leftChildIndex]) return leftChildIndex
    if (this.heap[rightChildIndex]) return rightChildIndex

    // no children -> return null
    return null
  }
}

// test
// const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
// const heap = new MinHeap(array)
// console.log(heapToString(heap.heap))

// heap.insert(1)
// console.log('--------------------------------')
// console.log(heapToString(heap.heap))

// heap.remove()
// console.log('--------------------------------')
// console.log(heapToString(heap.heap))

// heap.remove()
// console.log('--------------------------------')
// console.log(heapToString(heap.heap))
