// sol 1 - "brute force" approach - for each string in smallStrings iterate over
// bigString and check if the small string is contained within it
// O(PM*PN) time complexity, where:
// P - number of strings in smallStrings array
// M - number of characters in bigString
// N - average number of characters in strings in smallStrings array
export function multiStringSearch(bigString: string, smallStrings: string[]) {
  const resultArr: boolean[] = []
  for (const smallString of smallStrings) {
    resultArr.push(bigStringContainsSmallString(bigString, smallString))
  }
  return resultArr
}

// O(M*N) time complexity, where:
// M - number of characters in bigString
// N - average number of characters in strings in smallStrings array
function bigStringContainsSmallString(bigString: string, smallString: string) {
  let bigCounter = 0
  const smallStringLength = smallString.length
  const bigStringLength = bigString.length - smallStringLength + 1

  while (bigCounter < bigStringLength) {
    let found = true

    for (
      let smallCounter = 0;
      smallCounter < smallStringLength;
      smallCounter++
    ) {
      if (bigString[bigCounter + smallCounter] !== smallString[smallCounter]) {
        found = false
        break
      }
    }
    if (found) {
      return true
    }

    bigCounter++
  }

  return false
}
