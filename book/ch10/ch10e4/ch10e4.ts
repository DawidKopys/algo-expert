const array = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [
    15,
    16,
    17,
    18,
    19,
    [20, 21, 22, [23, 24, 25, [26, 27, 28, 29]], 30, 31],
    32
  ],
  33
]

type DeepArray<T> = Array<T | DeepArray<T>>

export function printNumbers(arr: DeepArray<number>) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      printNumbers(item)
    } else {
      console.log(item)
    }
  }
}

export function flatten(arr: any[], acc?: number[]) {
  const flat = acc || []

  for (const item of arr) {
    if (Array.isArray(item)) {
      flatten(item, flat)
    } else {
      flat.push(item)
    }
  }

  return flat
}

printNumbers(array)
// console.log('flatten(array) :', flatten(array))
