import { MinHeap } from '../heaps/heap/MinHeap'

export function heapSort(arr: number[]): number[] {
  const heap = new MinHeap(arr)
  const sorted = []

  while (heap.heap.length > 0) {
    sorted.push(heap.remove())
  }

  return sorted
}
