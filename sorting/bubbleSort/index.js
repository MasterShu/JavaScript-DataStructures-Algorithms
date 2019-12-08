const bubbleSort = (arr, n) => {
  const [...newArr] = arr
  let tempExchangVal
  while (n > 0) {
    for (let j = 0; j < n - 1; j++) {
      if (newArr[j] > newArr[j + 1]) {
        tempExchangVal = newArr[j]
        newArr[j] = newArr[j + 1]
        newArr[j + 1] = tempExchangVal
      }
    }
    n--
  }
  return newArr
}

module.exports = {
  bubbleSort
}
