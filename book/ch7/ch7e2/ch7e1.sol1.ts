// sol 1 - using hash table with O(N) time complexity
export function findDuplicate(array: string[]) {
  const seen = new Map<string, true>()

  for (const str of array) {
    if (seen.has(str)) {
      return str
    }
    seen.set(str, true)
  }

  return null
}

