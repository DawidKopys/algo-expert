let callCounter = 0

// original from book to improve
// export function addUntil100(arr: number[]): number {
//   // count calls
//   callCounter += 1

//   if (arr.length === 0) {
//     return 0
//   }

//   if ((arr[0] + addUntil100(arr.slice(1))) > 100) {
//     return addUntil100(arr.slice(1))
//   } else {
//     return arr[0] + addUntil100(arr.slice(1))
//   }
// }

export function addUntil100(arr: number[]): number {
  // count calls
  callCounter += 1

  if (arr.length === 0) {
    return 0
  }

  const subSum = addUntil100(arr.slice(1))

  if (arr[0] + subSum > 100) {
    return subSum
  } else {
    return arr[0] + subSum
  }
}

// const arr = [20, 25, 10, 5, 5, 3, 50]
// const result = addUntil100(arr)
// console.log('result :', result)

// console.log('callCounter :', callCounter)
