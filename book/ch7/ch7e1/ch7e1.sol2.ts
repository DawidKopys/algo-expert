// sol 2 - hash tables with O(M+N) time complexity
export function arraysIntersection(array1: number[], array2: number[]) {
  const intersection = []
  const array1Elements = new Map<number, true>()
  
  for (const i of array1) {
    array1Elements.set(i, true)
  }

  for (const j of array2) {
    if (array1Elements.has(j)) {
      intersection.push(j)
    }
  }

  return intersection
}
