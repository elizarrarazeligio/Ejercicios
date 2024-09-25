/* Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0. */
const findAverage = (array) =>
  array == 0 ? 0 : array.reduce((prev, curr) => prev + curr) / array.length;

console.log(findAverage([12, 34, 65, 12]));
console.log(findAverage([1, 1, 1, 1]));
console.log(findAverage([4, 5, 8, 3]));
console.log(findAverage([0]));
