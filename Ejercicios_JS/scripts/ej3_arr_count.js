/* Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */
function countPositivesSumNegatives(input) {
  res = [];
  pos = 0;
  neg = 0;

  if (!input || input.length === 0) {
    return res;
  }

  input.forEach((item) => {
    return item > 0 ? pos++ : (neg += item);
  });

  res.push(pos, neg);
  return res;
}

input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
input2 = null;
input3 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
input4 = [];
input5 = [
  -74, 88, 25, -70, 89, -59, 69, -33, -16, -44, -99, -19, -48, 85, 11, 57, -9,
  -36, 12, 52, -81, 98, 32, -91, -22,
];

console.log(countPositivesSumNegatives(input1));
console.log(countPositivesSumNegatives(input2));
console.log(countPositivesSumNegatives(input3));
console.log(countPositivesSumNegatives(input4));
console.log(countPositivesSumNegatives(input5));
