const heapSort = (arr, n) => {
  const newArr = [...arr]
  // heapify
  for (let i = parseInt((n - 1) / 2); i >= 0; i--) {
    __shiftDown(newArr, n, i)
  }

  for (let i = (n - 1); i > 0; i--) {
    [newArr[0], newArr[i]] = [newArr[i], newArr[0]]
    __shiftDown(newArr, i, 0)
  }
  return newArr
}

const __shiftDown = (arr, n, k) => {
  while ((2 * k + 1) < n) {
    let i = 2 * k + 1
    if (i + 1 < n && arr[i + 1] > arr[i]) {
      i += 1
    }
    if (arr[k] >= arr[i]) {
      break
    }
    [arr[i], arr[k]] = [arr[k], arr[i]]
    k = i
  }
}

module.exports = {
  heapSort
}
