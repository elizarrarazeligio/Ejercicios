/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output. */

const compose = function (functions) {
  return function (x) {
    let res = 0;
    if (functions.length === 0) return x;
    for (let i = functions.length - 1; i >= 0; i--) {
      res = functions[i](x);
      x = res;
    }
    return res;
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const functions3 = [];

console.log(compose(functions)(4));
console.log(compose(functions2)(1));
console.log(compose(functions3)(42));
