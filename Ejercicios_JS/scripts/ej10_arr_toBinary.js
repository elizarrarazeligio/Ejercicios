/* Given an array add all the number elements and return the binary equivalent of that sum;
to make the code bullet proof anything else than a number should be added as 0 since it can't be added.
If your language can handle float binaries assume the array won't contain float or doubles. */
function arr2bin(arr) {
  let sum = arr.reduce((acc, curr) => {
    return typeof curr == "number" ? acc + curr : acc + 0;
  }, 0);
  let newArr = [];
  while (sum >= 1) {
    newArr.push(sum % 2);
    sum = Math.floor(sum / 2);
  }
  return newArr.reverse().join("");
}

const arr2bin2 = (arr) =>
  arr
    .reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0)
    .toString(2);

const input1 = [1, 4, 5];
const input2 = [true, true, false, 15];
const input3 = "";
const input4 = [23, 9, null, 99];
const input5 = [8, "Hello World", 934];

console.log(arr2bin(input1));
console.log(arr2bin(input2));
//console.log(arr2bin(input3));
console.log(arr2bin(input4));
console.log(arr2bin(input5));
