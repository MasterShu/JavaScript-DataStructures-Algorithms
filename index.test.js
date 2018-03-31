
const { randArray, testSort, randNearlyArr } = require('./utils/index')
const { selectionSort, insertionSortPlus, mergeSort, mergeSortBU, quickSort, quickSortRepetition, quickSort3Ways, BinaryHeap, heapSort, IndexHeap } = require('./index')

const numOfTimes = 1000000

const arr = randArray(0, 100000, numOfTimes)
const arr2 = randNearlyArr(numOfTimes, 100)

// testSort('selectionSort', selectionSort, arr, numOfTimes)
// testSort('insertionSort', insertionSortPlus, arr, numOfTimes)
// testSort('mergeSort', mergeSort, arr, numOfTimes)

// testSort('mergeSortBU', mergeSortBU, arr, numOfTimes)
// testSort('quickSort', quickSort, arr, numOfTimes)

// testSort('quickSort3Ways', quickSort3Ways, arr, numOfTimes)
// testSort('heapSort', heapSort, arr, numOfTimes)

const hello = new IndexHeap()

for (let index = 0; index < 10; index++) {
  const randKey = parseInt(Math.random() * 1000)
  hello.insert(index, randKey)
}

// hello.print()
while (!hello.isEmpty()) {
  console.log(hello.shiftMax())
}
