/* Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the
previous value every subsequent time it is called (n, n + 1, n + 2, etc). */
const createCounter = function (n) {
  let count = 0;
  function counter() {
    count++;
    console.log(count, n);
    return count === 1 ? n : (n += 1);
  }

  return [counter(), counter(), counter()];
};

const n = 10;
console.log(createCounter(n));
