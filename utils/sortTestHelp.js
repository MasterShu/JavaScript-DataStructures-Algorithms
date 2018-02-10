const seedrandom = require('seedrandom');

// 根据随机种子随机
const randArray = (min, max, n) => {
    if (min >= max) {
        throw 'Error'
    }
    // 随机种子
    const rng = seedrandom(Date.now())
    const arr = []
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(rng() * (max - min + 1) + min);
    }
    return arr
}
const randNearlyArr = (n, numOfTimes) => {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
  const rng = seedrandom(Date.now())
  for (let i = 0; i < n; i++) {
    const posX = Math.floor(rng() * n)
    const posY = Math.floor(rng() * n)
    arr[posX] = [arr[posY], arr[posY] = arr[posX]][0]
    // [arr[posX], arr[posY]] = [arr[posY], arr[posX]]
  }
  return arr
}

// 测试排序函数
const testSort = (sortName, sort, arr, n) => {
  const startTime = getTime()
  const newArr = sort(arr, n)
  const endTime = getTime()
  if (!isSorted(newArr, n)) {
    throw 'Error'
  }
  console.log(sortName, 'use time ', endTime-startTime, ' sort ', n)
}

// 验证排序是否成功
const isSorted = (arr, n) => {
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

// 获取当前时间
const getTime = () => {
  return Date.now()
}

module.exports = {
  randArray,
  testSort,
  randNearlyArr
}
