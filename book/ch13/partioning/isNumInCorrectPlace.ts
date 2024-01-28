export function isNumInCorrectPlace(arr: number[], num: number) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.lastIndexOf(num)) {
      // we are before num - all numbers should be lower or equal
      if (arr[i] > num) {
        return false
      }
    }

    if (i === arr.lastIndexOf(num)) {
      continue
    }

    if (i > arr.lastIndexOf(num)) {
      // we are after num - all numbers should be greater or equal
      if (arr[i] < num) {
        return false
      }
    }
  }

  return true
}
