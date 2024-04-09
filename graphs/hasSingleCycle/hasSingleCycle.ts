export function hasSingleCycle(array: number[]) {
  let jumpsCounter = 0
  let currentElementIndex = 0
  const visited = new Set()

  while (jumpsCounter < array.length) {
    if (visited.has(currentElementIndex)) {
      return false
    }
    visited.add(currentElementIndex)

    currentElementIndex = getNextIdx(currentElementIndex, array)
    jumpsCounter++
  }

  return currentElementIndex === 0
}

function getNextIdx(currentIdx: number, array: number[]) {
  const jump = array[currentIdx]
  const nextIdx = (currentIdx + jump) % array.length
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}
