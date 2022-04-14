class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /** Add item to the end of the list */
  push(value) {
    let node = new Node(value);

    // if list is empty
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      // push node to the end
      this.tail.next = node;
      // update tail reference
      this.tail = node;
    }

    this.length++;

    return this;
  }

  /** Remove item from the end of the list */
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  /** Remove item from the beginning of the list */
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  /** Add a node to the beginning of the list */
  unshift(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  /** Retrieve a node at position */
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }

  /** Change the value of the node at position */
  set(index, value) {
    let node = this.get(index);
    if (!node) {
      return false;
    }

    node.value = value;
    return true;
  }

  /** Add node to list at position */
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(value);
    }
    if (index === 0) {
      return !!this.unshift(value);
    }

    let node = new Node(value);
    let previous = this.get(index - 1);
    let next = previous.next;

    previous.next = node;
    node.next = next;
    this.length++;
    return true;
  }

  /** Remove node at position */
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;

    return removed;
  }

  /** Reverse list in place */
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let previous = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }

  print() {
    console.log([...this].map(x => x.value));
  }
}

export default SinglyLinkedList;
