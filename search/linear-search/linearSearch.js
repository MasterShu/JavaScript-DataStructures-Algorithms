import { isEqual } from '../../utils'

/**
 * Linear search implementation.
 *
 * @param {array} array
 * @param {*} seekingItem
 * @returns {number}
 */
function linearSearch(array, seekingItem) {
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    if (isEqual(array[i], seekingItem)) {
      return i
    }
  }
  return -1
}

module.exports = {
  linearSearch
}
