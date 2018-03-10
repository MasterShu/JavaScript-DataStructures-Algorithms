const { insertionSortRange } = require('../insertionSort/index')

// 快速排序
const quickSort = (arr, n) => {
  const newArr = [...arr]
  __quickSort(newArr, 0, n - 1)
  return newArr
}

/**
 * 快速排序 - 针对多重复键值的 返回新的数组
 * @param {array} arr 需要排序的数组
 * @param {number} n 排序的长度
 */
const quickSortRepetition = (arr, n) => {
  const newArr = [...arr]
  __quickSortRepetition(newArr)
  return newArr
}

/**
 * 三路快速排序 - 返回新的排序完数组
 * @param {array} arr 需要排序的数组
 * @param {number} n 需要排序数组的长度
 */
const quickSort3Ways = (arr, n) => {
  const newArr = [...arr]
  // sran()
  __quickSort3Ways(newArr, 0, n - 1)
  return newArr
}

const __quickSort = (arr, l, r) => {
  // 注意, 调用一个小范围内大数量的数据循环次数多的情况下, 极易出现栈溢出
  if (r - l <= 200) {
    insertionSortRange(arr, l, r)
    return
  }
  const p = __partition(arr, l, r)
  __quickSort(arr, l, p - 1)
  __quickSort(arr, p + 1, r)
}

const __quickSortRepetition = (arr, l, r) => {
  // 注意, 调用一个小范围内大数量的数据循环次数多的情况下, 极易出现栈溢出
  if (r - l <= 200) {
    insertionSortRange(arr, l, r)
    return
  }
  const p = __partitionRepetition(arr, l, r)
  __quickSortRepetition(arr, l, p - 1)
  __quickSortRepetition(arr, p + 1, r)
}

const __quickSort3Ways = (arr, l, r) => {
  // 注意, 调用一个小范围内大数量的数据循环次数多的情况下, 极易出现栈溢出
  if (r - l <= 200) {
    insertionSortRange(arr, l, r)
    return
  }
  const [lt, gt] = __partition3Ways(arr, l, r)
  __quickSort3Ways(arr, l, lt - 1)
  __quickSort3Ways(arr, gt, r)
}

/**
 * 对 arr[l...r] 部分进行 partition 操作
 * @param {Array} arr 需要排序的数组
 * @param {Number} l 左边
 * @param {Number} r 右边
 * @return {Number} 返回 p, 使得 arr[l...p - 1] < arr[p]; arr[p+1...r] > arr[p]
 */
const __partition = (arr, l, r) => {
  const randKey = Math.floor(Math.random() * (r - l + 1)) + l

  const tmpItem = arr[l]
  arr[l] = arr[randKey]
  arr[randKey] = tmpItem

  const v = arr[l]

  let j = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
      j++
    }
  }

  [arr[l], arr[j]] = [arr[j], arr[l]]

  return j
}

const __partitionRepetition = (arr, l, r) => {
  const randKey = Math.floor(Math.random() * (r - l + 1)) + l

  const tmpItem = arr[l]
  arr[l] = arr[randKey]
  arr[randKey] = tmpItem

  const v = arr[l]

  // arr[l+1...i) <= v; arr(j...r] >= v
  let i = l + 1
  let j = r
  while (true) {
    while (arr[i] < v && arr[i] < v) {
      i++
    }
    while (arr[j] > v && arr[j] > v) {
      j--
    }
    if (i > j) {
      break
    }
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }

  [arr[l], arr[j]] = [arr[j], arr[l]]
  return j
}

const __partition3Ways = (arr, l, r) => {
  const randKey = Math.floor(Math.random() * (r - l + 1)) + l

  const tmpItem = arr[l]
  arr[l] = arr[randKey]
  arr[randKey] = tmpItem

  const v = arr[l]

  let lt = l
  let gt = r + 1
  let i = l + 1
  while (i < gt) {
    if (arr[i] < v) {
      [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]]
      lt++
      i++
    } else if (arr[i] > v) {
      [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]]
      gt--
    } else {
      i++
    }
  }
  [arr[l], arr[lt]] = [arr[lt], arr[l]]
  return [lt, gt]
}

module.exports = {
  quickSort,
  quickSortRepetition,
  quickSort3Ways
}
