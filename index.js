const selection = require('./sorting/selectionSort/index')
const quick = require('./sorting/quickSort/index')
const insertion = require('./sorting/insertionSort/index')
const merge = require('./sorting/mergeSort/index')
const heap = require('./heap')
const heapSort = require('./sorting/heapSort')
const bubbleSort = require('./sorting/bubbleSort')

module.exports = {
  ...selection,
  ...quick,
  ...insertion,
  ...merge,
  ...heap,
  ...heapSort,
  ...bubbleSort
}
