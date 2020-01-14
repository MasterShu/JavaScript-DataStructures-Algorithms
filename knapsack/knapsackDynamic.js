class KnapsackDynamic {
  constructor(weightList = [], weightLoading = 0, valueList = []) {
    this.states = []
    this.materialsWeight = weightList
    this.numbers = weightList.length
    this.weightLoading = weightLoading
    this.values = valueList
  }
  
  /**
   *
   * @returns {number}
   */
  getMaxWeight() {
    this.states[0] = true
    if (this.materialsWeight[0] <= this.weightLoading) {
      this.states[this.materialsWeight[0]] = true
    }
    return this.dynamicCount()
  }

  /**
   *
   * @returns {number}
   */
  dynamicCount() {
    for (let i = 1; i < this.numbers; i++) {
      for (let j = this.weightLoading - this.materialsWeight[i]; j >= 0; j--) {
        if (this.states[j] === true) {
          this.states[j + this.materialsWeight[i]] = true
        }
      }
    }

    for (let i = this.weightLoading; i >= 0; i--) {
      if (this.states[i] === true) {
        return i
      }
    }
    return 0
  }
}

module.exports = {
  KnapsackDynamic
}
