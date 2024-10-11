/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:
- increment() increases the current value by 1 and then returns it.
- decrement() reduces the current value by 1 and then returns it.
- reset() sets the current value to init and then returns it. */
const createCounter = function (init) {
  let res = init;
  const obj = {
    increment() {
      return (init += 1);
    },
    decrement() {
      return (init -= 1);
    },
    reset() {
      init = res;
      return init;
    },
  };

  return [
    obj.increment(),
    obj.increment(),
    obj.increment(),
    obj.decrement(),
    obj.reset(),
  ];
};

console.log(createCounter(10));
