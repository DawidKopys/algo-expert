let callCounter = 0
let nCallCounter: Record<string, number> = {}

const cache = new Map<number, number>()

// sol 2 - with memoization
export function fib(n: number): number {
  // count calls
  callCounter += 1
  // for given args
  nCallCounter[n] = nCallCounter[n] ? nCallCounter[n] + 1 : 1

  if (n <= 1) {
    return n
  }

  const cached = cache.get(n)
  if (cached) {
    return cached
  }

  const result = fib(n - 2) + fib(n - 1)
  cache.set(n, result)
  return result
}

// const n = 15
// const result = fib(n)
// console.log('result :', result)

// console.log('callCounter :', callCounter)
// console.log('nCallCounter :', nCallCounter)
