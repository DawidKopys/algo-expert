let callCounter = 0

// original from book to improve


export function uniquePaths(rows: number, columns: number, memo = new Map<string, number>()): number {
  // count calls
  callCounter += 1

  if (rows === 1 || columns === 1) {
    return 1
  }

  const memoKey = `rows:${rows} columns:${columns}`
  const memoValue = memo.get(memoKey)
  if (memoValue) {
    return memoValue
  }

  const result = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo)
  memo.set(memoKey, result)
  return result
}

const rows = 5
const columns = 8
const result = uniquePaths(rows, columns)
console.log('result :', result)

console.log('callCounter :', callCounter)
