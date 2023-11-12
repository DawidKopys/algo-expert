// sol 1 - nested loops with O(N*M) time complexity
export function arraysIntersection(array1: number[], array2: number[]) {
  const intersection = []

  for (const i of array1) {
    for (const j of array2) {
      if (i === j) {
        intersection.push(i)
      }
    }
  }

  return intersection
}
