class MaxBinaryHeap {
  constructor(...valuses) {
    this.values = [...valuses];
  }

  #bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  // TODO: use recursion
  #sinkDown(index) {
    const length = this.values.length;
    const element = this.values[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild;
      let rightChild;

      let swapIndex = -1;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swapIndex = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > element && rightChild > leftChild) {
          swapIndex = rightChildIdx;
        }
      }

      if (swapIndex === -1) break;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();
  }

  extractMax() {
    // Swap 1st and last values
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.#sinkDown(0);
    }

    return end;
  }
}

export default MaxBinaryHeap;
