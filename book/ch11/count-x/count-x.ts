const str = 'axbxcxd'

export function countX(str: string): number {
  if (str.length === 0) {
    return 0
  }
  const count = str[0] === 'x' ? 1 : 0

  return count + countX(str.slice(1))
}

// console.log('countX(str) :', countX(str))
