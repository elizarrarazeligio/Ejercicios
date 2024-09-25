/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string */
const fakeBin = (x) =>
  x
    .split("")
    .map((item) => (item < 5 ? 0 : 1))
    .join("");

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
console.log(fakeBin("366058562030849490134388085"));
