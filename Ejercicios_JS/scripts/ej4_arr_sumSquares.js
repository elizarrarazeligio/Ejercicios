/* Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9. */
function squareSum(numbers) {
  const sumSquares = numbers.reduce((acc, curr) => acc + curr * curr, 0);
  return sumSquares;
}

input1 = [-12, -17, 5, 10, -18, -7, -8];
input2 = [-12, 11, -18, -1, -13, 20, 5, -11, 17];
input3 = [10, 17, -15, 20, -9, 10, -4, 13, -1];
input4 = [1, -5, -9, 13];
input5 = [17, -4, 12, -1, -17, -19, -12, 2, -19];

console.log(squareSum(input1));
console.log(squareSum(input2));
console.log(squareSum(input3));
console.log(squareSum(input4));
console.log(squareSum(input5));
