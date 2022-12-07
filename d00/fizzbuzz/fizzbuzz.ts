export const fizzBuzz = (n: number): string => {
  const str = n.toString()
  let res: string = ''
  if (str.includes('3')) res += 'FIZZ'
  if (str.includes('5')) res += 'BUZZ'
  if (n % 3 === 0) res += 'FIZZ'
  if (n % 5 === 0) res += 'BUZZ'
  return res || str
}
