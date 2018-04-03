const selection = require('./selectionSort/index')
const quick = require('./quickSort/index')
const insertion = require('./insertionSort/index')
const merge = require('./mergeSort/index')
const heap = require('./heap')
const heapSort = require('./heapSort')
const bubbleSort = require('./bubbleSort')

module.exports = {
  ...selection,
  ...quick,
  ...insertion,
  ...merge,
  ...heap,
  ...heapSort,
  ...bubbleSort
}
