export function add(a:any, b: any) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return new Error('Please give me 2 numbers')
  }
  return a + b
}

export function addNumbers(...nums: number[]) {
  return nums.reduce((total, currentNumber) => {
    return total + currentNumber
  }, 0)
}

// addNumbers(1,2,3)
// - total = 0, currentNumber = 1 -> 0 + 1 -> 1
// - total = 1, currentNumber = 2 -> 1 + 2 -> 3
// - total = 3, currentNumber = 3 -> 3 + 3 -> 6

// [['a', 1], ['b', 2], ['c', 3]]
// {a: 1, b: 2, c: 3}
export function convertPairsToObject(pairs: [string, number][]) {
  return pairs.reduce<Record<string, number>>((acc, current) => {
    acc[current[0]] = current[1]
    return acc
  },{})
}


export function keepSpecificValue(arr: number[], value: number) {
  return arr.filter((element)=> element === value)
}

export function createArray(num: number, count: number) {
 return new Array(count).fill(num)
}