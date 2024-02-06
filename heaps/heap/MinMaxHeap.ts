import { heapToString } from '../util/heapToString'

type HeapComparisonFunc = (a: number, b: number) => boolean

export class Heap {
  heap: number[]
  comparisonFunc: HeapComparisonFunc

  get length(): number {
    return this.heap.length
  }

  constructor(comparisonFunc: HeapComparisonFunc)
  constructor(comparisonFunc: HeapComparisonFunc, array: number[])
  constructor(comparisonFunc: HeapComparisonFunc, array?: number[]) {
    this.comparisonFunc = comparisonFunc
    if (array) {
      this.heap = this.buildHeap(comparisonFunc, array)
    } else {
      this.heap = []
    }
  }

  buildHeap(comparisonFunc: HeapComparisonFunc, array: number[]) {
    const heap = new Heap(comparisonFunc)
    for (const num of array) {
      heap.insert(num)
    }
    return heap.heap
  }

  siftDown() {
    // trickle down
    let trickleNodeIndex = 0

    while (true) {
      const smallerOrGreaterChildIndex =
        this.getSmallerOrGreaterChildIndex(trickleNodeIndex)

      // there is no smaller child -> there are no children -> we are done
      if (smallerOrGreaterChildIndex === null) break

      // compare tricle node with smaller child
      if (
        this.comparisonFunc(
          this.heap[smallerOrGreaterChildIndex],
          this.heap[trickleNodeIndex]
        )
      ) {
        // swap trickle node with smaller child
        ;[this.heap[trickleNodeIndex], this.heap[smallerOrGreaterChildIndex]] =
          [this.heap[smallerOrGreaterChildIndex], this.heap[trickleNodeIndex]]

        // update trickle node index
        trickleNodeIndex = smallerOrGreaterChildIndex
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
      const parentIndex = Heap.getParentIndex(trickleNodeIndex)

      const trickleNodeValue = this.heap[trickleNodeIndex]
      const parentNodeValue = this.heap[parentIndex]

      if (this.comparisonFunc(trickleNodeValue, parentNodeValue)) {
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

  private getSmallerOrGreaterChildIndex(index: number): number | null {
    const leftChildIndex = Heap.getLeftChildIndex(index)
    const rightChildIndex = Heap.getRightChildIndex(index)

    if (
      this.heap[leftChildIndex] !== undefined &&
      this.heap[rightChildIndex] !== undefined
    ) {
      // both children exist -> pick smaller
      const smallerChild =
        this.comparisonFunc(
          this.heap[rightChildIndex],
          this.heap[leftChildIndex]
        )
          ? rightChildIndex
          : leftChildIndex

      return smallerChild
    }

    // one child -> return the only child
    if (this.heap[leftChildIndex] !== undefined) return leftChildIndex
    if (this.heap[rightChildIndex] !== undefined) return rightChildIndex

    // no children -> return null
    return null
  }
}

export function MAX_HEAP_FUNC(a: number, b: number) {
  return a > b
}

export function MIN_HEAP_FUNC(a: number, b: number) {
  return a < b
}

// test
// const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
// const minHeap = new Heap(MIN_HEAP_FUNC, array)
// const maxHeap = new Heap(MAX_HEAP_FUNC, array)

// console.log('INSERT _____________________________________________________________________')
// console.log(heapToString(minHeap.heap))

// console.log('_____________________________________________________________________')
// console.log(heapToString(maxHeap.heap))

// console.log('REMOVE _____________________________________________________________________')
// maxHeap.remove()
// console.log(heapToString(maxHeap.heap))
// console.log('_______________________________')
