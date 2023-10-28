const input = [1, 2, 3, 5, 6, 8, 9]
const expected = [1, 4, 9, 25, 36, 64, 81]

export function sortedSquaredArray(array: number[]) {
  // "brute-force" approach
  return array.map((element) => element**2).sort((a, b) => a - b);
}

const result = sortedSquaredArray(input)

console.log('arraysEqual(result, expected) :', arraysEqual(result, expected))

function arraysEqual(a: any[], b: any[]): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}