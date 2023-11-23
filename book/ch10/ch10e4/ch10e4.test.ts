import { test, mock } from 'node:test'
import assert from 'node:assert'
import { flatten, printNumbers } from './ch10e4'

test('printNumbers', async (t) => {
  await t.test('prints as many times as there are items in the arrays', () => {
    const mocked = t.mock.method(console, 'log', () => {})

    const array = [
      1,
      2,
      3,
      [4, 5, 6],
      7,
      [8, [9, 10, 11, [12, 13, 14]]],
      [
        15,
        16,
        17,
        18,
        19,
        [20, 21, 22, [23, 24, 25, [26, 27, 28, 29]], 30, 31],
        32
      ],
      33
    ]
    printNumbers(array)
    const callsCount = mocked.mock.callCount()
    const expectedCallsCount = array.flat(Infinity).length

    assert.strictEqual(callsCount, expectedCallsCount)
  })

  await t.test('calls console.log for each number in the arrays', () => {
    const mocked = t.mock.method(console, 'log')

    const array = [
      1,
      2,
      3,
      [4, 5, 6],
      7,
      [8, [9, 10, 11, [12, 13, 14]]],
      [
        15,
        16,
        17,
        18,
        19,
        [20, 21, 22, [23, 24, 25, [26, 27, 28, 29]], 30, 31],
        32
      ],
      33
    ]
    printNumbers(array)
    const callsArguments = mocked.mock.calls.map((call) => call.arguments)
    const expectedCallsArguments = array.flat(Infinity).map((item) => [item])

    assert.deepStrictEqual(callsArguments, expectedCallsArguments)
  })
})

test('flatten', async (t) => {
  await t.test('flattens array', () => {
    const array = [
      1,
      2,
      3,
      [4, 5, 6],
      7,
      [8, [9, 10, 11, [12, 13, 14]]],
      [
        15,
        16,
        17,
        18,
        19,
        [20, 21, 22, [23, 24, 25, [26, 27, 28, 29]], 30, 31],
        32
      ],
      33
    ]
    const expected = array.flat(Infinity)
    const result = flatten(array)
    assert.deepStrictEqual(result, expected)
  })
})