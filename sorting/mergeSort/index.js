import { insertionSortRange } from '../insertionSort'

const mergeSort = (arr, n) => {
  const [...newArr] = arr
  __mergeSort(newArr, 0, n - 1)
  return newArr
}

const mergeSortBU = (arr, n) => {
  const [...newArr] = arr
  for (let sz = 1; sz < n; sz += sz) {
    for (let i = 0; (i + sz) < n; i += sz + sz) {
      // 对 arr[i...i+sz -1] 和 arr[i+sz...i+2*sz-1] 进行归并
      __merge(newArr, i, i + sz - 1, Math.min.apply(null, [i + sz + sz - 1, n - 1]))
    }
  }
  return newArr
}

// 递归使用归并排序, 对 arr[l...r]的范围进行排序
const __mergeSort = (arr, l, r) => {
  // if (l >= r) {
  //   return
  // }
  if ((r - l) <= 100) {
    insertionSortRange(arr, l, r)
    return
  }
  const mid = (l + r) / 2
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)
  __merge(arr, l, mid, r)
}

// 将 arr[l...mid] 和 arr[mid+1...r] 两部分进行归并
const __merge = (arr, l, mid, r) => {
  const aux = []
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }
  let i = l
  let j = mid + 1
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

module.exports = {
  mergeSort,
  mergeSortBU
}
