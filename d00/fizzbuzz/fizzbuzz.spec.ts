import { fizzBuzz } from './fizzbuzz'

describe('FizzBuzz', () => {
  describe('Simple cases', () => {
    it.each([
      [1, '1'],
      [2, '2'],
      [4, '4']
    ])('should return string when %i is given', (n, expected) => {
      expect(fizzBuzz(n)).toBe(expected)
    })
  })
  describe('Contains 3', () => {
    it('should return FIZZ when 13 is given', () => {
      expect(fizzBuzz(13)).toBe('FIZZ')
    })
    it('should return FIZZ when 23 is given', () => {
      expect(fizzBuzz(23)).toBe('FIZZ')
    })
  })
  describe('Contains 5', () => {
    it('should return BUZZ when 52 is given', () => {
      expect(fizzBuzz(52)).toBe('BUZZ')
    })
    it('should return BUZZ when 59 is given', () => {
      expect(fizzBuzz(59)).toBe('BUZZ')
    })
  })
  describe('Contains 5 and 3', () => {
    it('should return FIZZBUZZ when 53 is given', () => {
      expect(fizzBuzz(53)).toBe('FIZZBUZZ')
    })
  })
  describe('Contains 3 and is divisible by 3', () => {
    it('should return FIZZFIZZ when 3 is given', () => {
      expect(fizzBuzz(3)).toBe('FIZZFIZZ')
    })
    it('should return FIZZFIZZ when 33 is given', () => {
      expect(fizzBuzz(33)).toBe('FIZZFIZZ')
    })
  })
  describe('Contains 3 and is divisible by 15', () => {
    it('should return FIZZFIZZBUZZ when 30 is given', () => {
      expect(fizzBuzz(30)).toBe('FIZZFIZZBUZZ')
    })
  })
  describe('Contains 5 and is divisible by 5', () => {
    it('should return BUZZBUZZ when 5 is given', () => {
      expect(fizzBuzz(5)).toBe('BUZZBUZZ')
    })
    it('should return BUZZBUZZ when 55 is given', () => {
      expect(fizzBuzz(55)).toBe('BUZZBUZZ')
    })
  })
  describe('Contains 5 and is divisible by 15', () => {
    it('should return BUZZFIZZBUZZ when 45 is given', () => {
      expect(fizzBuzz(45)).toBe('BUZZFIZZBUZZ')
    })
  })
  describe('Multiple of 3 not contains 3', () => {
    it.each([
      [6],
      [9],
      [12]
    ])('should return FIZZ when %i is given', (n) => {
      expect(fizzBuzz(n)).toBe('FIZZ')
    })
  })
  describe('Multiple of 5 not contains 5', () => {
    it.each([
      [10],
      [20]
    ])('should return BUZZ when %i is given', (n) => {
      expect(fizzBuzz(n)).toBe('BUZZ')
    })
  })
  describe('Multiple of 15', () => {
    it.each([
      [60],
      [120],
    ])('should return FIZZBUZZ when %i is given', (n) => {
      expect(fizzBuzz(n)).toBe('FIZZBUZZ')
    })
  })
  describe('Acceptance', () => {
    it.each([
      [29, '29'],
      [3 * 12, 'FIZZFIZZ'],
      [5 * 7, 'FIZZBUZZBUZZ'],
      [15 * 17, 'BUZZFIZZBUZZ']
    ])('should return when %i is given', (n, expected) => {
      expect(fizzBuzz(n)).toBe(expected)
    })
  })
})
