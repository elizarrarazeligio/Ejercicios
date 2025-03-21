/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. */
const map = function (arr, fn) {
  return arr.map((item, index) => {
    return fn(item, index);
  });
};

const map2 = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i);
  }
  return res;
};

arr = [1, 2, 3, 4, 5, 6, 7, 8];
function plus(n, i) {
  return n + i;
  //return n + 1;
  return 42;
}

console.log(map(arr, plus));

console.log(map2(arr, plus));
