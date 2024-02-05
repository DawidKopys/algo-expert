// I don't understand this but whatever
function* inorder(a: number[], i = 0, depth = 0): any {
  if (i >= a.length) return
  yield* inorder(a, i * 2 + 1, depth + 1)
  yield [a[i], depth]
  yield* inorder(a, i * 2 + 2, depth + 1)
}

function toString(a: number[]) {
  return Array.from({ length: 32 - Math.clz32(a.length) }, (_, level) =>
    Array.from(inorder(a), ([val, depth], i) =>
      depth === level ? val : ' '.repeat((val + '').length)
    ).join(' ')
  ).join('\n')
}

export { toString as heapToString }