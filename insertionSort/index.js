const insertionSort = (arr, n) => {
  const [...newArr] = arr
  for (let i = 1; i < n; i++) {
    // 寻找插入位置
    for (let j = i; j > 0 && newArr[j] < newArr[j - 1]; j--) {
      [newArr[j], newArr[j - 1]] = [newArr[j - 1], newArr[j]]
    }
  }
  return newArr
}

// 升级版
const insertionSortPlus = (arr, n) => {
  const [...newArr] = arr
  for (let i = 0; i < n; i++) {
    const e = newArr[i]
    let j
    for (j = i; j > 0 && newArr[j - 1] > e; j--) {
      newArr[j] = newArr[j - 1]
    }
    newArr[j] = e
  }
  return newArr
}

const insertionSortRange = (arr, l, r) => {
  for (let i = l + 1; i <= r; i++) {
    const e = arr[i]
    let j
    for (j = i; j > l && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}

module.exports = {
  insertionSort,
  insertionSortPlus,
  insertionSortRange
}
