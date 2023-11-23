const str = 'abcdef'

// O(N!) time complexity, where N is the length of str - because there are N! anagrams for given word
export function generateAnagrams(str: string): string[] {
  if (str.length === 0) {
    return []
  }

  // base case
  if (str.length === 1) {
    return [str]
  }

  const substr = str.slice(0, -1)
  const character = str.at(-1) as string

  // subproblem
  const substrAnagrams = generateAnagrams(substr)

  // use solution of subproblem for current problem
  let anagrams: string[] = []
  for (const anagram of substrAnagrams) {
    const variations = generateVariationsWithCharacter(anagram, character)
    anagrams.push(...variations)
  }
  
  return anagrams
}

// const anagrams = generateAnagrams(str)
// console.log('anagrams :', anagrams)
// console.log('anagrams.length :', anagrams.length)

// najpierw prostsze zadanie:
// mam string "abc" i litere "d" ->
// -> wygeneruj stringi z "d" dodanym do kazdego mozliwego miejsca w tym stringu "abc", czyli:
// "dabc"
// "adbc"
// "abdc"
// "abcd"

// O(N) time, where N is length of str
function generateVariationsWithCharacter(str: string, char: string) {
  const arr = []
  for (let i = 0; i <= str.length; i++) {
    const newStr = str.slice(0, i) + char + str.slice(i)
    arr.push(newStr)
  }
  return arr
}
