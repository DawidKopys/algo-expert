export function findMissingLetter(str: string) {
  const found = new Map<string, boolean>()

  // initialize map - O(N)
  for (const letter of getAllLettersFromAlphabet()) {
    found.set(letter, false)
  }

  // traverse str and mark found leters as found - O(N)
  for (const letter of str) {
    found.set(letter, true)
  }
  
  // traverse through map items and return not found letter
  for (const [key, value] of found) {
    if (!value) {
      return key
    }
  }

  return null
}

function getAllLettersFromAlphabet() {
  return [...Array(26)].map((_, i) =>
    String.fromCharCode('a'.charCodeAt(0) + i)
  )
}
