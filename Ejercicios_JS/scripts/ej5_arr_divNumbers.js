/* Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
First argument is an array of numbers and the second is the divisor. */
function divisibleBy(numbers, divisor) {
  return numbers.filter(function (item) {
    if (item === 0 || item % divisor === 0) {
      return this;
    }
  });
}

function divisibleBy2(numbers, divisor) {
  return numbers.filter((num) => num % divisor === 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1, 3, 5], 2));
