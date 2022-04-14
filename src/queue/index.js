class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  *[Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  print() {
    console.log([...this].map(x => x.value));
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const result = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;
    return result.value;
  }
}

export default Queue;
