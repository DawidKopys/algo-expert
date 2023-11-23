import { test } from 'node:test'
import assert from 'node:assert'
import { fib } from './fib.js'
import { fib as fibWithCache } from './fib.sol2.js'
import { fib as fibWithMemo } from './fib.sol3.js'
import { fib as fibBottomUp } from './fib.bottomup.js'

test('fib', async (t) => {
  await t.test('sums all numbers in the array', () => {
    const n = 10
    const expected = 55
    const result = fib(n)
    assert.strictEqual(result, expected)
  })
})

test('fibWithCache', async (t) => {
  await t.test('sums all numbers in the array', () => {
    const n = 10
    const expected = 55
    const result = fibWithCache(n)
    assert.strictEqual(result, expected)
  })
})

test('fibWithMemo', async (t) => {
  await t.test('sums all numbers in the array', () => {
    const n = 10
    const expected = 55
    const result = fibWithMemo(n)
    assert.strictEqual(result, expected)
  })
})

test('fibBottomUp', async (t) => {
  await t.test('sums all numbers in the array', () => {
    const n = 10
    const expected = 55
    const result = fibBottomUp(n)
    assert.strictEqual(result, expected)
  })
})
