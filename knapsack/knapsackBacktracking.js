class KnapsackBacktracking {
  /**
   * @param {array} weightList
   * @param {number} weightLoading
   */
  constructor(weightList, weightLoading) {
    this.result = 0
    this.materialsWeight = weightList
    this.numbers = weightList.length
    this.weightLoading = weightLoading
  }

  getMaxWeight() {
    this.loadRecursive(0, 0)
    return true
  }

  /**
   *
   * @param {number} materialIndex
   * @param {number} currentWeight
   * @returns {boolean}
   */
  loadRecursive(materialIndex, currentWeight) {
    // Check if the knapsack is full or material is done.
    if (currentWeight === this.weightLoading || materialIndex === this.numbers) {
      // Update the load of knapsack if current load is big than stored result.
      if (currentWeight > this.result) {
        this.result = currentWeight
      }
      return true
    }

    // Do not loading index of material
    this.loadRecursive(materialIndex + 1, currentWeight)
    // Loading index of material if the added weight is not overload.
    if (currentWeight + this.materialsWeight[materialIndex] <= this.weightLoading) {
      this.loadRecursive(materialIndex + 1, currentWeight + this.materialsWeight[materialIndex])
    }
  }
}

module.exports = {
  KnapsackBacktracking
}
