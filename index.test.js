const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const { randArray, testSort, randNearlyArr } = require('./utils/index')
const { selectionSort, insertionSortPlus, mergeSort, mergeSortBU, quickSort, quickSortRepetition, quickSort3Ways } = require('./index')

const numOfTimes = 10000000

const arr = randArray(0, 100000, numOfTimes)
const arr2 = randNearlyArr(numOfTimes, 100)

// testSort('selectionSort', selectionSort, arr, numOfTimes)
// testSort('insertionSort', insertionSortPlus, arr, numOfTimes)
// testSort('mergeSort', mergeSort, arr, numOfTimes)

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`)

//   // fork workers
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork()
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
  testSort('mergeSortBU', mergeSortBU, arr, numOfTimes)
  // testSort('quickSort', quickSort, arr, numOfTimes)
testSort('quickSort3Ways', quickSort3Ways, arr, numOfTimes)
// }
