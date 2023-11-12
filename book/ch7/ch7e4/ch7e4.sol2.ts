// sol 2 - with map, O(N) time complexity
export function findFirstUniqueCharacter(str: string) {
  const charactersOccurences = new Map<string, number>()

  // traverse through str and count occurences of each letter - O(N) 
  for (const letter of str) {
    const currentOccurences = charactersOccurences.get(letter)

    if (currentOccurences) {
      charactersOccurences.set(letter, currentOccurences + 1)
    } else {
      charactersOccurences.set(letter, 1)
    }
  }

  // traverse through map of letters and return first letter with 1 occurence - O(N)
  for (const [key, value] of charactersOccurences) {
    if (value === 1) {
      return key
    }
  }

  return null
}
