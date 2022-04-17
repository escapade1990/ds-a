class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined; // this
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return;

    let current = this.root;
    let found;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    return found;
  }

  breadthFirstSearch() {
    let data = [];
    let queue = [this.root];
    let node;

    while (queue.length) {
      node = queue.shift();

      data.push(node);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return data;
  }

  depthFirstOrder_PreOrder() {
    const data = [];

    const traverse = node => {
      data.push(node);

      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    traverse(this.root);

    return data;
  }

  depthFirstOrder_PostOrder() {
    const data = [];

    const traverse = node => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);

      data.push(node);
    };

    traverse(this.root);

    return data;
  }

  depthFirstOrder_InOrder() {
    const data = [];
    const traverse = node => {
      node.left && traverse(node.left);
      data.push(node);
      node.right && traverse(node.right);
    };

    traverse(this.root);

    return data;
  }
}

export default BST;
