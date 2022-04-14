class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
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

  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
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

export default Stack;
