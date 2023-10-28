import { describe, test } from 'node:test'
import assert from 'node:assert'
import { binarySearch as binarySearchSol1 } from './binarySearchSol2.js'
import { binarySearch as binarySearchSol2 } from './binarySearchSol1.js'

const solutions = [ binarySearchSol1, binarySearchSol2 ]

solutions.forEach((solFnc, index) => {
  describe(`${solFnc.name} sol${index+1}`, () => {
    describe('with array containing the target', () => {
      test('finds target in an array with even number of elements', () => {
        const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, 3)
      })
      
      test('finds target equal to the last element of the array', () => {
        const array = [0, 1, 21, 33]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, 3)
      })
  
      test('finds target equal to the first element of the array', () => {
        const array = [33, 45, 48, 89, 99]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, 0)
      })
    
      test('finds target in an array with odd number of elements', () => {
        const array = [0, 1, 21, 33, 45, 45, 61, 71, 72]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, 3)
      })

      test('finds result in a single-element array', () => {
        const array = [33]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, 0)
      })
    })

    describe('with array not containing the target', () => {
      test('returns -1 if target is not in the array', () => {
        const array = [0, 1, 21, 31, 45, 45, 61, 71, 72, 73]
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, -1)
      })
    
      test('returns -1 for an empty array', () => {
        const array: number[] = []
        const target = 33
        const result = solFnc(array, target)
        assert.strictEqual(result, -1)
      })
    })
  })
})


