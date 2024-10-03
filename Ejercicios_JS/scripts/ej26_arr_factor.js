// Given a non-empty array of integers, return the result of multiplying the values together in order.
const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([2, 2, 2, 2, 2, 2]));
console.log(grow([4, 1, 1, 1, 4]));
