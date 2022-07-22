import {add, addNumbers, convertPairsToObject, createArray, keepSpecificValue} from '../utils/functions'
import {describe, it, expect} from 'vitest'

describe('add function', () => {
  it('should add 1, 2 and return 3', () => {
    const result = add(1,2)
    expect(result).toEqual(3)
  })
  it('should thow an Error if we dont pass in 2 numbers', () => {
    const result = add(1, 'a')
    expect(result).toEqual(new Error('Please give me 2 numbers'))
  })
})

describe('add multiple numbers', () => {
  it('should return 6 when i pass in 1,2,3', () => {
    const result = addNumbers(1,2,3)
    expect(result).toEqual(6)
  })
})

describe('convertPairsToObject', () => {
  it('should convert a list of pairs to and object', () => {
    const pairs:[string, number][]  = [['a', 1], ['b', 2]]
    const result = convertPairsToObject(pairs)
    expect(result).toEqual({a: 1, b: 2})
  })
})


//  takes number[] and a number and return an array with just that number
// [1,2,3,5,5,2,9] -> [5,5]
describe('keepValue', () => {
  it('should filter out number that are not our value', () => {
    const result = keepSpecificValue([1,2,3,5,5,2,9], 5)
    expect(result).toEqual([5,5])
  })

  it('should return an empty array when number is not found', () => {
    const result = keepSpecificValue([1,2,3,5,5,2,9], 6)
    expect(result).toEqual([])
  })
})

// number, count -> Array filled with the number count times
// (5, 6) -> [5,5,5,5,5,5]
describe('createArray', () => {
  it('the array should only contain the number we pass in', () => {
    const number = 5
    const result = createArray(number,6)
    expect(result).toContain(number)
  })

  it('the array should have a length of count', () => {
const count = 6
    const result = createArray(5,count)
    expect(result).toHaveLength(count)
  })
})


