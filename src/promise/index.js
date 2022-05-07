const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

class MyPromise {
  #result;
  #state = STATE.PENDING;
  #handlers = [];

  constructor(executor) {
    const resolve = value => {
      this.#result = value;
      this.#state = STATE.FULFILLED;
      this.#handlers;
    };

    const reject = reason => {
      this.#result = reason;
      this.#state = STATE.REJECTED;
    };

    try {
      executor(resolve, reject);

      ///
    } catch (error) {
      //   reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.#state === STATE.PENDING) {
      this.#handlers.push(onFulfilled, onRejected);
    } else if (this.#state === STATE.FULFILLED) {
      queueMicrotask(() => onFulfilled(this.#result));
    } else {
      queueMicrotask(() => onRejected(this.#result));
    }
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(resolve, 1000, 123);
});

promise.then(console.log); // 123

let a = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 123);
});
