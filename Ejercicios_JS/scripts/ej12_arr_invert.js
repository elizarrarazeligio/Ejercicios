/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. */
const invert = (array) => array.map((item) => item * -1);

const input1 = [1, 2, 3, 4, 5];
const input2 = [1, -2, 3, -4, 5];
const input3 = [];
const input4 = [0];

console.log(invert(input1));
console.log(invert(input2));
console.log(invert(input3));
console.log(invert(input4));
