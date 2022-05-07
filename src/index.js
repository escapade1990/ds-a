console.clear();
import Hashtable from './hash-table/index.js';

let ht = new Hashtable();

ht.set('koko', 1);
ht.set('koko2', 2);

let keys = ht.keys();
let values = ht.values();

console.log(koko2);

// const STATE = {
//   PENDING: 'PENDING',
//   FULFILLED: 'FULFILLED',
//   REJECTED: 'REJECTED',
// };

// class MyPromise {
//   #result;
//   #state = STATE.PENDING;
//   #handlers = [];

//   constructor(executor) {
//     const resolve = value => {
//       const [onFulfilled] = this.#handlers;

//       this.#result = value;
//       this.#state = STATE.FULFILLED;

//       onFulfilled?.(value);
//     };

//     const reject = reason => {
//       this.#result = reason;
//       this.#state = STATE.REJECTED;
//     };

//     try {
//       executor(resolve, reject);

//       ///
//     } catch (error) {
//       //   reject(error);
//     }
//   }

//   then(onFulfilled, onRejected) {
//     let newPromise = new MyPromise((resolve2, reject2) => {
//       if (this.#state === STATE.PENDING) {
//         this.#handlers.push(
//           (...args) => {
//             let result = onFulfilled(...args);
//             resolve2(result);
//           },
//           (...args) => {
//             let result = onRejected(...args);
//             reject2(result);
//           }
//         );
//       } else if (this.#state === STATE.FULFILLED) {
//         queueMicrotask(() => {
//           let result = onFulfilled(this.#result);
//           resolve2(result);
//         });
//       } else {
//         queueMicrotask(() => {
//           let result = onRejected(this.#result);
//           reject2(result);
//         });
//       }
//     });
//     return newPromise;
//   }
// }

// console.log('ko1');
// // let promise = new MyPromise((resolve, reject) => {
// //   setTimeout(resolve, 5000, 123);
// // });

// // promise.then(console.log); // 123

// // let instantPromise = new MyPromise(resolve => resolve('my instant resolve'));

// // instantPromise.then(value => {
// //   console.log(value);
// // });

// let promise1 = new MyPromise((resolve, reject) => {
//   setTimeout(resolve, 1000, 100);
// });

// let promise2 = promise1.then(value => {
//   console.log(value);
//   return value * 2;
// });

// promise2.then(console.log);

// console.log('ko2');

// let a = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 123);
// });
