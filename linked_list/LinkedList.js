class LinkedList {
  constructor() {
    /**
     * @type {LinkedListNode}
     */
    this.head = null
    /**
     * @type {LinkedListNode}
     */
    this.tail = null
    /**
     * The size of Linked list
     * @type {number}
     */
    this.count = 0
  }

  /**
   * Building Linked list by array.
   * @param {array} array
   */
  build(array) {
    this.count = array.length
    for (let i = 0; i < array.length; i++) {
      const newNode = new LinkedListNode(array[i])
      this.__insertToEnd(newNode)
    }
  }

  /**
   * Append element to the end of the linked list
   * @param value
   * @returns {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)
    this.__insertToEnd(newNode)
    this.count++
    return this
  }

  /**
   * Delete element when it equal the pass value.
   * @param value
   * @returns {null}
   */
  delete(value) {
    if (!this.head) {
      return null
    }

    let deleteNode = null

    // Delete element when position is head.
    while (this.head && this.head.value === value) {
      deleteNode = this.head
      this.head = this.head.next
      this.count--
    }

    let currentNode = this.head
    // Delete element when item's position is between head and tail.
    if (currentNode !== null) {
      while (currentNode.next) {
        if (value === currentNode.next.value) {
          deleteNode = currentNode.next
          currentNode.next = currentNode.next.next
          this.count--
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // Delete element when item's position is tail.
    if (value === this.tail.value) {
      this.tail = currentNode
      this.count--
    }

    return deleteNode
  }

  deleteNode(nodeItem) {
    if (this.count < 1) {
      return null
    }

    if (this.count === 1) {
      if (this.head === nodeItem) {
        this.head = this.tail = null
        this.count = 0
        return nodeItem
      }
      return null
    }

    const currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next === nodeItem) {
        currentNode.next = currentNode.next.next
        return nodeItem
      }
    }

    return null
  }

  /**
   *
   * @param {LinkedListNode} newNode
   * @private
   */
  __insertToEnd(newNode) {
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }
    this.tail.next = newNode
    this.tail = newNode
  }
}

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    /**
     * @type {LinkedListNode}
     */
    this.next = next
  }
}

module.exports = {
  LinkedList,
  LinkedListNode
}
