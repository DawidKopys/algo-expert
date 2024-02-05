import { test, beforeEach } from 'node:test'
import assert from 'node:assert'
import { ContinuousMedianHandler } from './continuousMedian'

test.only('ContinuousMedianHandler', async (t) => {
  let handler: ContinuousMedianHandler

  beforeEach(() => {
    handler = new ContinuousMedianHandler()
  })

  await t.test('median is initially null', () => {
    assert.equal(handler.getMedian(), null)
  })

  await t.test('inserts values and calculates median correctly', () => {
    handler.insert(5)
    assert.equal(handler.getMedian(), 5)

    handler.insert(10)
    assert.equal(handler.getMedian(), 7.5)

    handler.insert(100)
    assert.equal(handler.getMedian(), 10)

    handler.insert(200)
    assert.equal(handler.getMedian(), 55)
  })

  await t.test('inserts values and calculates median correctly', () => {
    handler.insert(5)
    handler.insert(10)
    handler.insert(100)
    handler.insert(200)
    handler.insert(6)
    handler.insert(13)
    handler.insert(14)
    handler.insert(50)
    handler.insert(51)

    assert.equal(handler.getMedian(), 14)

    handler.insert(52)
    assert.equal(handler.getMedian(), 32)
  })
})
