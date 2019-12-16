class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  /**
   *
   * @param {array} array
   */
  build(array) {
    this.count = array.length
    for (let i = 0; i < array.length; i++) {
      const newNode = new LinkedListNode(array[0])
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
  
  delete(value) {
    if (!this.head) {
      return null
    }
    
    
    // TODO delete element
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
    }
    this.tail.next = newNode
    this.tail = newNode
  }
}

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}
