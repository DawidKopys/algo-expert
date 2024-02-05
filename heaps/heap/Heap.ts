import { heapToString } from '../util/heapToString'

export class Heap {
  data: number[] = []

  get rootNode(): number | undefined {
    return this.data[0]
  }

  set rootNode(value: number) {
    this.data[0] = value
  }

  get lastNode(): number | undefined {
    return this.data.at(-1)
  }

  leftChildIndex(index: number): number {
    return index * 2 + 1
  }

  rightChildIndex(index: number): number {
    return index * 2 + 2
  }

  parentIndex(index: number): number {
    return Math.trunc((index - 1) / 2)
  }

  insert(value: number): void {
    // 1. insert new value as new last node
    // turn value into last node by inserting it at the end of the array
    this.data.push(value)

    // keep track of the index of the newly inserted node
    let newNodeIndex = this.data.length - 1

    // 2. "tricle up"
    // if the new node is not in the root position,
    // and it's greater than its parent node:
    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      // swap the new node with the parent node
      ;[this.data[newNodeIndex], this.data[this.parentIndex(newNodeIndex)]] = [
        this.data[this.parentIndex(newNodeIndex)],
        this.data[newNodeIndex]
      ]
      // update the index of the new node
      newNodeIndex = this.parentIndex(newNodeIndex)
    }
  }

  delete() {
    // save root node value to return it at the end of this function
    const valueToDelete = this.rootNode

    // 1. we replace root node with last node -> essentially removing root node
    this.rootNode = this.data.pop()!
    let trickleNodeIndex = 0

    // 2. "trickle down" the new root value
    while (true) {
      const trickleNode = this.data[trickleNodeIndex]

      const greaterChildIndex = this.getGreaterChildIndex(trickleNodeIndex)

      // no greater child -> trickle node is in correct position -> we are done
      if (greaterChildIndex === null) break;
      
      // compare tricle node with greater child
      if (trickleNode < this.data[greaterChildIndex]) {
        // swap trickle node with greater child
        ;[this.data[trickleNodeIndex], this.data[greaterChildIndex]] = [
          this.data[greaterChildIndex],
          this.data[trickleNodeIndex]
        ]

        // update trickle node index
        trickleNodeIndex = greaterChildIndex
      } else {
        // trickle node is greater than its children -> we are done
        break
      }
    }

    return valueToDelete
  }

  private getGreaterChildIndex(index: number): number | null {
    const leftChildIndex = this.leftChildIndex(index)
    const rightChildIndex = this.rightChildIndex(index)

    if (this.data[leftChildIndex] && this.data[rightChildIndex]) {
      const greaterChildIndex =
      this.data[leftChildIndex] > this.data[rightChildIndex]
        ? leftChildIndex
        : rightChildIndex

      return greaterChildIndex
    }

    if (this.data[leftChildIndex]) return this.data[leftChildIndex]
    if (this.data[rightChildIndex]) return this.data[rightChildIndex]

    return null
  }
}

const heap = new Heap()
heap.insert(100)
heap.insert(88)
heap.insert(25)
heap.insert(87)
heap.insert(16)
heap.insert(8)
heap.insert(12)
heap.insert(86)
heap.insert(50)
heap.insert(2)
heap.insert(15)
heap.insert(3)

console.log(heapToString(heap.data))

console.log('---------')
heap.delete()
console.log(heapToString(heap.data))


