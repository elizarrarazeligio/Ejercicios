/* Write a function that takes an array of numbers and returns the sum of the numbers.
The numbers can be negative or non-integer.
If the array does not contain any numbers then you should return 0. */
const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));