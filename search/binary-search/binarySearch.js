import { isEqual, lessThan } from '../../utils'

/**
 * Binary search implementation.
 * @param {array} arraySorted
 * @param seekingItem
 * @returns {number}
 */
const binarySearch = (arraySorted, seekingItem) => {
  // When array is null, we needn't search.
  if (arraySorted.length < 1) {
    return -1
  }
  // When array is only one element, we just make sure this element is we need or not.
  if (arraySorted.length === 1) {
    if (isEqual(arraySorted[0], seekingItem)) {
      return 0
    }
    return -1
  }

  let indexStart = 0
  let indexEnd = arraySorted.length - 1

  while (indexStart <= indexEnd) {
    // We need calculate the index of the middle element.
    const indexMiddle = indexStart + Math.floor((indexEnd - indexStart) / 2)

    // When the element of the middle is right.
    if (isEqual(arraySorted[indexMiddle], seekingItem)) {
      return indexMiddle
    }

    // Choose a zone half of the array.
    if (lessThan(arraySorted[indexMiddle], seekingItem)) {
      // Right
      indexStart = indexMiddle + 1
    } else {
      // Left
      indexEnd = indexMiddle - 1
    }
  }

  // We are not found the element of arrays.
  return -1
}

module.exports = {
  binarySearch
}
