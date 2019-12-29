class EightQueens {
  constructor() {
    this.result = []
    this.solutions = []
  }

  solveEightQueens() {
    this.queensRecursive(0)
  }

  /**
   * A recursive method to solve Eight Queen problem.
   * @param row
   * @returns {boolean}
   */
  queensRecursive(row) {
    if (row === 8) {
      // this.solutions.push()
      return true
    }
    for (let column = 0; column < 8; column++) {
      if (this.isSafe(row, column)) {
        this.result[row] = column
        this.queensRecursive(row + 1)
      }
    }
  }

  /**
   * Check if an queen can placed on the position.
   * @param {number} row
   * @param {number} column
   * @returns {boolean}
   */
  isSafe(row, column) {
    let leftUp = column - 1
    let rightUp = row - 1

    for (let i = row - 1; i >= 0; i--) {
      if (this.result[i] === column) return false
      if (leftUp >= 0 && this.result[i] === leftUp) {
        return false
      }
      if (rightUp < 8 && this.result[i] === rightUp) {
        return false
      }
      leftUp--
      rightUp--
    }
    return true
  }
}

module.exports = {
  EightQueens
}
