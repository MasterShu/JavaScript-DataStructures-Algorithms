const selection = require('./selectionSort/index')
const quick = require('./quickSort/index')
const insertion = require('./insertionSort/index')
const merge = require('./mergeSort/index')

module.exports = {
  ...selection,
  ...quick,
  ...insertion,
  ...merge
}
