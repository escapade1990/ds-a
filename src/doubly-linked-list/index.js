class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get isEmpty() {
    return this.length === 0;
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

  /** Add node to the end */
  push(value) {
    let node = new Node(value);

    if (this.isEmpty) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  /** Remove a node from the end */
  pop() {
    if (this.isEmpty) return undefined;

    let poped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poped.prev;
      this.tail.next = null;
      poped.prev = null;
    }

    this.length--;

    return poped;
  }

  /** Remove a node from the beginning*/
  shift() {
    if (this.isEmpty) return undefined;
    let shifted = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }

    this.length--;
    return shifted;
  }

  /** Add a node at the beginning */
  unshift(value) {
    let node = new Node(value);

    if (this.isEmpty) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  /** Access a node at position */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const mid = Math.floor(this.length / 2);
    let current;
    let count;
    if (index < mid) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    this.length--;

    return current;
  }

  /** Replace the value of a node at index */
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;

    return true;
  }

  /** Add a node at index */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let node = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = node;
    node.prev = beforeNode;

    afterNode.prev = node;
    node.next = afterNode;

    this.length++;

    return true;
  }

  /** Remove a node at index */
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop();

    const removed = this.get(index);

    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;

    removed.next = null;
    removed.prev = null;
    this.length--;

    return removed;
  }

  /** Reverse list in place */
  reverse() {
    let temp = null;
    let current = this.head;

    while (current !== null) {
      temp = current.prev; //null
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp != null) {
      this.head = temp.prev;
    }

    return this;
  }
}

export default DoublyLinkedList;
