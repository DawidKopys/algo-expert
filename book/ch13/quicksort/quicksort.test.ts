import { test } from 'node:test'
import assert from 'node:assert/strict'
import { quicksort } from './quicksort'
// import { quickSortHelper as quicksort } from './quicksorttest'

test('quicksort', async (t) => {
    await t.test('sorts [0, 5, 2, 1, 6, 3] array', () => {
    const arr = [0, 5, 2, 1, 6, 3]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [1, 2] array', () => {
    const arr = [1, 2]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [2, 1] array', () => {
    const arr = [0, 3, 2, 3, 4, 3]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5] array', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [0, 5, 2, 1, 6, 3, 3, 3, 3, 9, -10] array', () => {
    const arr = [0, 5, 2, 1, 6, 3, 3, 3, 3, 9, -10]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [-0, -5, -2, -1, -6, -3, -3, -3, -3, -9, -10] array', () => {
    const arr = [-0, -5, -2, -1, -6, -3, -3, -3, -3, -9, -10]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [0] array', () => {
    const arr = [0]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [] array', () => {
    const arr = [0]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8] array', () => {
    const arr = [-4, 5, 10, 8, -10, -6, -4, -2, -5, 3, 5, -4, -5, -1, 1, 6, -7, -6, -7, 8]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764, -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56, 507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3, -153, 240, -160, -610, -583, -27, 131] array', () => {
    const arr = [427, 787, 222, 996, -359, -614, 246, 230, 107, -706, 568, 9, -246, 12, -764, -212, -484, 603, 934, -848, -646, -991, 661, -32, -348, -474, -439, -56, 507, 736, 635, -171, -215, 564, -710, 710, 565, 892, 970, -755, 55, 821, -3, -153, 240, -160, -610, -583, -27, 131]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 382, -827, -796, 372, 753, 519, 906] array', () => {
    const arr = [991, -731, -882, 100, 280, -43, 432, 771, -581, 180, -382, -998, 847, 80, -220, 680, 769, -75, -817, 366, 956, 749, 471, 228, -435, -269, 652, -331, -387, -657, -255, 382, -216, -6, -163, -681, 980, 913, -169, 972, -523, 354, 747, 805, 382, -827, -796, 372, 753, 519, 906]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
  await t.test('sorts [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321] array', () => {
    const arr = [-19, 759, 168, 306, 270, -602, 558, -821, -599, 328, 753, -50, -568, 268, -92, 381, -96, 730, 629, 678, -837, 351, 896, 63, -85, 437, -453, -991, 294, -384, -628, -529, 518, 613, -319, -519, -220, -67, 834, 619, 802, 207, 946, -904, 295, 718, -740, -557, -560, 80, 296, -90, 401, 407, 798, 254, 154, 387, 434, 491, 228, 307, 268, 505, -415, -976, 676, -917, 937, -609, 593, -36, 881, 607, 121, -373, 915, -885, 879, 391, -158, 588, -641, -937, 986, 949, -321]
    const expected = [...arr].sort((a, b) => a - b)
    quicksort(arr, 0, arr.length - 1)
    assert.deepEqual(arr, expected)
  })
})
