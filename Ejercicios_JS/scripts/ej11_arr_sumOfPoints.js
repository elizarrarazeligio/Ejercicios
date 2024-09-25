/* Our football team has finished the championship.
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y",
where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]
Points are awarded for each match as follows:
if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship. */
function points(games) {
  let res = 0;
  games.forEach((item) => {
    let us = item.split(":")[0];
    let they = item.split(":")[1];
    return (res += us === they ? 1 : us > they ? 3 : 0);
  });
  return res;
}

const input1 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];
const input2 = [
  "1:1",
  "2:2",
  "3:3",
  "4:4",
  "2:2",
  "3:3",
  "4:4",
  "3:3",
  "4:4",
  "4:4",
];
const input3 = [
  "0:1",
  "0:2",
  "0:3",
  "0:4",
  "1:2",
  "1:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];
const input4 = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "1:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];
const input5 = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];

console.log(points(input1));
console.log(points(input2));
console.log(points(input3));
console.log(points(input4));
console.log(points(input5));
