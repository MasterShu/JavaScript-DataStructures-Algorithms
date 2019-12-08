/**
 * Make sure two elements are equal.
 * @param a
 * @param b
 * @returns {boolean}
 */
function isEqual(a, b) {
  return a === b
}

/**
 * Make sure variable a is less than b.
 * @param a
 * @param b
 * @returns {boolean}
 */
function lessThan(a, b) {
  return a - b < 0
}

module.exports = {
  isEqual,
  lessThan
}
