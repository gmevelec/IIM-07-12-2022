import { fizzBuzz } from './fizzbuzz'

describe('FizzBuzz', () => {
  it.each([
    [1, '1'],
    [2, '2'],
    [4, '4']
  ])('should return string when %i is given', (n, expected) => {
    expect(fizzBuzz(n)).toBe(expected)
  })
  it.each([
    [3],
    [9],
    [12]
  ])('should return FIZZ when %i is given', (n) => {
    expect(fizzBuzz(n)).toBe('FIZZ')
  })
  it.each([
    [5],
    [10],
    [20]
  ])('should return BUZZ when %i is given', (n) => {
    expect(fizzBuzz(n)).toBe('BUZZ')
  })
  it.each([
    [15],
    [30],
    [45]
  ])('should return FIZZBUZZ when %i is given', (n) => {
    expect(fizzBuzz(n)).toBe('FIZZBUZZ')
  })
  it.each([
    [29, '29'],
    [3 * 12, 'FIZZ'],
    [5 * 7, 'BUZZ'],
    [15 * 17, 'FIZZBUZZ']
  ])('should return when %i is given', (n, expected) => {
    expect(fizzBuzz(n)).toBe(expected)
  })
})
