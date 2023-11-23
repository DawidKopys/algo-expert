let callCounter = 0
let nCallCounter: Record<string, number> = {}

// sol 3 - with memoization as function parameter
export function fib(n: number, memo = new Map<number, number>()): number {
  // count calls
  callCounter += 1
  // for given args
  nCallCounter[n] = nCallCounter[n] ? nCallCounter[n] + 1 : 1

  if (n <= 1) {
    return n
  }

  const cached = memo.get(n)
  if (cached) {
    return cached
  }

  const result = fib(n - 2, memo) + fib(n - 1, memo)
  memo.set(n, result)
  return result
}

// const n = 15
// const result = fib(n)
// console.log('result :', result)

// console.log('callCounter :', callCounter)
// console.log('nCallCounter :', nCallCounter)
