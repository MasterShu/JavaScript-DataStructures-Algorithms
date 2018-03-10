class BinaryHeap {
  constructor () {
    this.data = []
    this.count = 0
  }

  get size () {
    return this.count
  }

  /**
   * 构建二叉堆 - 通过数组数组
   * @param {array} array 原始数组
   */
  build (array) {
    this.count = array.length
    for (let i = 0; i < array.length; i++) {
      this.data[i + 1] = array[i]
    }
    for (let i = 0; i < parseInt(this.count / 2); i++) {
      this.__shiftDown(i)
    }
  }

  print () {
    console.log(this.data)
  }

  isEmpty () {
    return this.count === 0
  }

  insert (item) {
    this.data[this.count + 1] = item
    this.count += 1
    this.__shiftUp(this.count)
  }

  shiftMax () {
    if (this.count < 0) {
      return null
    }
    const key = 1
    const result = this.data[key]
    const tempData = this.data[key]
    this.data[key] = this.data[this.count]
    this.data[this.count] = tempData
    this.count--
    this.__shiftDown(key)
    return result
  }

  __shiftUp (k) {
    while (k > 1 && this.data[parseInt(k / 2)] < this.data[k]) {
      [this.data[parseInt(k / 2)], this.data[k]] = [this.data[k], this.data[parseInt(k / 2)]]
      k = parseInt(k / 2)
    }
  }

  __shiftDown (n) {
    while (2 * n <= this.count) {
      let i = 2 * n
      if (i + 1 <= this.count && this.data[i + 1] > this.data[i]) {
        i += 1
      }
      if (this.data[n] >= this.data[i]) {
        break
      }
      [this.data[i], this.data[n]] = [this.data[n], this.data[i]]
      n = i
    }
  }
}

module.exports = {
  BinaryHeap
}
