/* Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same. */
const distinct = (a) => [...new Set(a)];

function distinct1(a) {
  let res = [];
  a.forEach(function (item) {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

const input1 = [1, 1, 2];
const input2 = [1, 2, 1, 1, 3, 2];
const input3 = [1, 1, 1, 4, 4, 5, 6, 6, 7, 8, 9, 9];

console.log(distinct(input1));
console.log(distinct(input2));
console.log(distinct1(input3));
