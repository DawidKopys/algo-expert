import { Heap, MAX_HEAP_FUNC, MIN_HEAP_FUNC } from '../heap/MinMaxHeap'

export class ContinuousMedianHandler {
  lowers: Heap
  greaters: Heap
  median: number | null

  constructor() {
    this.lowers = new Heap(MAX_HEAP_FUNC)
    this.greaters = new Heap(MIN_HEAP_FUNC)
    this.median = null
  }

  insert(value: number) {
    if (this.lowers.length === 0 || value < this.lowers.peek()) {
      this.lowers.insert(value)
    } else {
      this.greaters.insert(value)
    }
    this.rebalanceHeaps()
    this.updateMedian()
  }

  rebalanceHeaps() {
    if (this.lowers.length - this.greaters.length === 2) {
      this.greaters.insert(this.lowers.remove())
    } else if (this.greaters.length - this.lowers.length === 2) {
      this.lowers.insert(this.greaters.remove())
    }
  }

  updateMedian() {
    if (this.lowers.length === this.greaters.length) {
      // even number of elements
      this.median = (this.lowers.peek() + this.greaters.peek()) / 2
    } else if (this.lowers.length > this.greaters.length) {
      this.median = this.lowers.peek()
    } else if (this.greaters.length > this.lowers.length) {
      this.median = this.greaters.peek()
    }
  }

  getMedian() {
    return this.median
  }
}

// tests
// const medianHandler = new ContinuousMedianHandler()
// medianHandler.insert(5)
// medianHandler.insert(10)
// console.log('medianHandler.lowers.heap :', medianHandler.lowers.heap)
// console.log('medianHandler.greaters.heap :', medianHandler.greaters.heap)
// console.log('medianHandler.getMedian() :', medianHandler.getMedian())

// medianHandler.insert(100)
// console.log('medianHandler.lowers.heap :', medianHandler.lowers.heap)
// console.log('medianHandler.greaters.heap :', medianHandler.greaters.heap)
// console.log('medianHandler.getMedian() :', medianHandler.getMedian())

// medianHandler.insert(200)
// console.log('medianHandler.lowers.heap :', medianHandler.lowers.heap)
// console.log('medianHandler.greaters.heap :', medianHandler.greaters.heap)
// console.log('medianHandler.getMedian() :', medianHandler.getMedian())
