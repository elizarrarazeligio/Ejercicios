/* Input: Array of elements ["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a" */
function printArray(array) {
  return array.join(""); // no commas delivered
}

const input1 = ["h", "o", "l", "a"];
const input2 = ["2", "4", "5", "2"];

console.log(printArray(input1));
console.log(printArray(input2));
