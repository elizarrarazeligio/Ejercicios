/* Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */

const once = function (fn) {
  let hasBeenCalled = false;
  let res;
  function count(...args) {
    if (!hasBeenCalled) {
      res = fn(...args);
      hasBeenCalled = true;
      return res;
    } else {
      return undefined;
    }
  }

  return [count(2, 4, 5), count(2, 3, 4), count(1, 2, 3)];
};

function sum(a, b, c) {
  return a + b + c;
}

function mult(a, b, c) {
  return a * b * c;
}

console.log(once(mult));
