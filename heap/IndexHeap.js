class IndexHeap {
  constructor() {
    this.data = []
    this.count = 0
    this.indexes = []
    this.reverse = []
  }

  get size() {
    return this.count
  }

  /**
   * 构建二叉堆 - 通过数组数组
   * @param {array} array 原始数组
   */
  build(array) {
    this.count = array.length
    for (let i = 0; i < array.length; i++) {
      this.data[i + 1] = array[i]
    }
    for (let i = 0; i < parseInt(this.count / 2); i++) {
      this.__shiftDown(i)
    }
  }

  print() {
    console.log(this.data)
  }

  isEmpty() {
    return this.count === 0
  }

  insert(i, item) {
    i += 1
    this.data[this.count + 1] = item
    this.indexes[this.count + 1] = i
    this.reverse[i] = this.count + 1
    this.count += 1
    this.__shiftUp(this.count)
  }

  shiftMax() {
    if (this.count < 0) {
      return null
    }
    const key = 1
    const result = this.data[this.indexes[key]]
    const tempData = this.indexes[key]
    this.indexes[key] = this.indexes[this.count]
    this.indexes[this.count] = tempData
    this.reverse[this.indexes[key]] = key
    this.reverse[this.indexes[this.count]] = 0
    this.count--
    this.__shiftDown(key)
    return result
  }

  shiftMaxIndex() {
    if (this.count < 0) {
      return null
    }
    const key = 1
    const result = this.indexes[key] - 1
    const tempData = this.indexes[key]
    this.indexes[key] = this.indexes[this.count]
    this.indexes[this.count] = tempData
    this.reverse[this.indexes[key]] = key
    this.reverse[this.indexes[this.count]] = 0
    this.count--
    this.__shiftDown(key)
    return result
  }

  /**
   * 获取子元素
   * 根据索引
   * @param {any} i 索引index
   * @returns 元素
   * @memberof IndexHeap
   */
  getItem(i) {
    return this.data[i + 1]
  }

  /**
   * 改变子元素
   * 根据索引改变元素
   * @param {any} i 索引
   * @param {any} item 新的元素
   * @memberof IndexHeap
   */
  change(i, item) {
    i += 1
    this.data[i] = item
    for (let j = 1; j <= this.count; j++) {
      if (i === this.indexes[j]) {
        this.__shiftUp(j)
        this.__shiftDown(j)
        return
      }
    }
  }

  changeItem(i, newItem) {
    i += 1
    this.data[i] = newItem
    let j = this.reverse[i]
    this.__shiftUp(j)
    this.__shiftDown(j)
  }

  __shiftUp(k) {
    while (k > 1 && this.data[this.indexes[parseInt(k / 2)]] < this.data[this.indexes[k]]) {
      [this.indexes[parseInt(k / 2)], this.indexes[k]] = [this.indexes[k], this.indexes[parseInt(k / 2)]]
      this.reverse[this.indexes[parseInt(k / 2)]] = parseInt(k / 2)
      this.reverse[this.indexes[k]] = k
      k = parseInt(k / 2)
    }
  }

  __shiftDown(n) {
    while (2 * n <= this.count) {
      let i = 2 * n
      if (i + 1 <= this.count && this.data[this.indexes[i + 1]] > this.data[this.indexes[i]]) {
        i += 1
      }
      if (this.data[this.indexes[n]] >= this.data[this.indexes[i]]) {
        break
      }
      [this.indexes[i], this.indexes[n]] = [this.indexes[n], this.indexes[i]]
      this.reverse[this.indexes[n]] = n
      this.reverse[this.indexes[i]] = i
      n = i
    }
  }
}

module.exports = {
  IndexHeap
}
