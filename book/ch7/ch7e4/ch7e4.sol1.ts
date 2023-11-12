// BAD, DOESN'T WORK
// sol 1 - with loop, O(?) time complexity
export function findFirstUniqueCharacter(str: string) {
  let uniqueIndex = 0

  let curr = 1
  while (curr < str.length) {
    // console.log('uniqueIndex :', uniqueIndex, `str[${uniqueIndex}] :`, str[uniqueIndex])
    // console.log('curr :', curr, `str[${curr}] :`, str[curr])
    
    if (curr !== uniqueIndex && str[curr] === str[uniqueIndex]) {
      // increment uniqueIndex and "restart" the loop
      uniqueIndex = uniqueIndex + 1
      curr = uniqueIndex

      // console.group('str[curr] === str[uniqueIndex] -> setting:')
      // console.log('uniqueIndex :', uniqueIndex, `str[${uniqueIndex}] :`, str[uniqueIndex])
      // console.log('curr :', curr, `str[${curr}] :`, str[curr])
      console.groupEnd()
    }

    curr++
  }

  return str[uniqueIndex]
}
