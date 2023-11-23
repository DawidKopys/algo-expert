export function fib(n: number): number {
  if (n <= 1) {
    return n
  }

  let a = 0
  let b = 1

  for (let i = 1; i < n; i++) {
    const temp = b
    b = a + b
    a = temp
  }

  return b
}

// const n = 15
// const result = fib(n)
// console.log('result :', result)
