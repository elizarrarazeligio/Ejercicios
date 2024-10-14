/* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method. */
const filter = function (arr, fn) {
  return arr.filter((item, index) => {
    return fn(item, index);
  });
};

const filter2 = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) ? res.push(arr[i]) : 0;
  }
  return res;
};

const arr1 = [0, 10, 20, 30];
const arr2 = [1, 2, 3];
const arr3 = [-2, -1, 0, 1, 2];

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

console.log(filter(arr1, greaterThan10));
console.log(filter(arr2, firstIndex));
console.log(filter(arr3, plusOne));

console.log(filter2(arr1, greaterThan10));
console.log(filter2(arr2, firstIndex));
console.log(filter(arr3, plusOne));
