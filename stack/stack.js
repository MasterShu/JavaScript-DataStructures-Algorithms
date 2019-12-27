class Stack {
  constructor() {
    /**
     * @type {*[]}
     */
    this.data = []
    this.count = 0
  }

  /**
   * Get stack size 获取栈的大小
   * @returns {number}
   */
  get size () {
    return this.count
  }

  /**
   * Building Stack of array by array
   * @param {Array} array
   */
  build(array) {
    this.count = array.length
    this.data = array
  }

  /**
   * Add new element to the top.
   * @param item
   */
  push(item) {
    this.data[this.count] = item
    this.count++
  }

  /**
   * The most top element of the stack is removed from the stack and returned.
    * @returns {null|T}
   */
  pop() {
    if (this.count === 0) {
      return null
    }
    const element = this.data.pop()
    this.count--
    return element
  }
}

module.exports = {
  Stack
}
