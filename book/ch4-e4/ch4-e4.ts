const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let stepsBad = 0
let stepsGood = 0

export function greatestNumberBad(array: number[]) {
  for (const i of array) {
    let iIsTheGreatest = true

    for (const j of array) {
      stepsBad++
      if (j > i) {
        iIsTheGreatest = false
      }
    }

    if (iIsTheGreatest) {
      return i
    }
  }
}

export function greatestNumberGood(array: number[]) {
  let max = array[0]

  for (const i of array) {
    stepsGood++
    if (i > max) {
      max = i
    }
  }

  return max
}

console.log(greatestNumberBad(arr))
console.log('stepsBad :', stepsBad)

console.log(greatestNumberGood(arr))
console.log('stepsGood :', stepsGood)
