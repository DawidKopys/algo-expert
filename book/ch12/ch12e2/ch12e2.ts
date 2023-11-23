let callCounter = 0

export function golomb(n: number, memo = new Map<number, number>()): number {
  // count calls
  callCounter += 1

  if (n === 1) {
    return 1
  }

  const cached = memo.get(n)
  if (cached) {
    return cached
  }

  const result = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo)
  memo.set(n, result)
  return result
}

const arr = 7
const result = golomb(arr)
console.log('result :', result)

console.log('callCounter :', callCounter)
