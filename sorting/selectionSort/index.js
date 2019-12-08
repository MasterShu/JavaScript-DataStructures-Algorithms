// 选择排序
const selectionSort = (arr, n) => {
  const [...newArr] = arr
  for (let i = 0; i < n; i++) {
    let minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (newArr[j] < newArr[minIndex]) {
        minIndex = j
      }
    }
    [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]]
  }

  return newArr
}

module.exports = {
  selectionSort
}
