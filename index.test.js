const { randArray, testSort, randNearlyArr } = require('./utils/index')
const { selectionSort, insertionSortPlus, mergeSort, mergeSortBU } = require('./index')

const numOfTimes = 5000000

const arr = randArray(100, 9999999, numOfTimes)
const arr2 = randNearlyArr(numOfTimes, 100)

// testSort('selectionSort', selectionSort, arr, numOfTimes)
// testSort('insertionSort', insertionSortPlus, arr, numOfTimes)
testSort('mergeSort', mergeSort, arr, numOfTimes)
testSort('mergeSortBU', mergeSortBU, arr, numOfTimes)
