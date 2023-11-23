const str = 'abcd'

export function generateAnagrams(str: string): string[] {
  if (str.length === 0) {
    return []
  }

  // base case
  if (str.length === 1) {
    return [str]
  }

  const tempStr = str.slice(0, -1)
  const character = str.at(-1) as string

  // subproblem
  console.group('getting anagrams for', tempStr)
  const anagrams = generateAnagrams(tempStr)
  console.log('anagrams :', anagrams)
  console.groupEnd()

  let result: string[] = []
  for (const anagram of anagrams) {
    console.group(
      `searching variations for "${anagram}" with character "${character}"`
    )
    const variations = generateVariationsWithCharacter(anagram, character)
    console.log('variations :', variations)
    console.groupEnd()
    result.push(...variations)
  }
  return result
}

// console.log('generateAnagrams(str) :', generateAnagrams(str))

// najpierw prostsze zadanie:
// mam string "abc" i litere "d" ->
// -> wygeneruj stringi z "d" dodanym do kazdego mozliwego miejsca w tym stringu "abc", czyli:
// "dabc"
// "adbc"
// "abdc"
// "abcd"

function generateVariationsWithCharacter(str: string, char: string) {
  const arr = []
  for (let i = 0; i <= str.length; i++) {
    const newStr = str.slice(0, i) + char + str.slice(i)
    arr.push(newStr)
  }
  return arr
}
