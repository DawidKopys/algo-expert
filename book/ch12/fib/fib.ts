let callCounter = 0
let nCallCounter: Record<string, number> = {}

// sol 1
export function fib(n: number): number {
  // count calls
  callCounter += 1
  // for given args
  nCallCounter[n] = nCallCounter[n] ? nCallCounter[n] + 1 : 1

  if (n <= 1) {
    return n
  }

  return fib(n - 2) + fib(n - 1)
}

// const n = 15
// const result = fib(n)
// console.log('result :', result)

// console.log('callCounter :', callCounter)
// console.log('nCallCounter :', nCallCounter)
