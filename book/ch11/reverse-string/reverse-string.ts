const str = 'abcde'

export function reverseString(str: string): string {
  if (str.length === 0) {
    return ''
  }
  if (str.length === 1) {
    return str[0]
  }
  return reverseString(str.slice(1)) + str[0]
}

// console.log('reverseString(str) :', reverseString(str))
