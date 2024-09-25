/* HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order!
Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.
The sorting should NOT be case sensitive */

// A - Z -> 65 a 90
// a - z -> 97 a 122
function sorter(textbooks) {
  return (arr = textbooks.sort(function (a, b) {
    let x = a.toUpperCase();
    let y = b.toUpperCase();
    let res = x === y ? 0 : x > y ? 1 : -1;
    console.log(a, b, res);
    return res;
  }));
}

// 0 or NaN indicates that "a" and "b" are equals, and mantain the same position
// Positive value (1) indicates that "a" should come after "b"
// Negative value (-1) indicates that "a" should come before "b"

const input1 = ["Algebra", "History", "Geometry", "English"];
const input2 = ["Algebra", "history", "Geometry", "english"];
const input3 = ["Alg#bra", "$istory", "Geom^try", "**english"];

//console.log(sorter(input1));
//console.log(sorter(input2));
console.log(sorter(input3));
