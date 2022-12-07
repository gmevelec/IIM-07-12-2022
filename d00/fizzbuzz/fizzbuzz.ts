export const fizzBuzz = (n: number): string => {
  if (n % 15 === 0) return 'FIZZBUZZ'
  if (n % 5 === 0) return 'BUZZ'
  if (n % 3 === 0) return 'FIZZ'
  return n.toString()
}
