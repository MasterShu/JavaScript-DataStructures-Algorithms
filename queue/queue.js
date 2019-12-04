class Queue {
  constructor() {
    this.data = []
    this.head = 0
    this.count = 0
  }

  /**
   * Building Queue of array by array
   * @param {Array} array
   */
  build(array) {
    this.data = array
    this.count = array.length
  }

  /**
   * Get Queue's length.
   * @returns {number}
   */
  get size() {
    return this.count
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.count
  }

  /**
   * Add a new element to the end.
   * @param item
   */
  enqueue(item) {
    this.data[this.head + this.count] = item
    this.count++
  }

  /**
   * The element in front of the queue will removed and returned.
   * @returns {null|*}
   */
  dequeue() {
    if (this.count <= 0) return null
    const element = this.data[this.head]
    this.head++
    this.count--
    return element
  }
}

module.exports = {
  Queue
}
