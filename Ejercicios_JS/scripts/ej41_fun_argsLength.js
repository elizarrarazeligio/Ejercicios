// Write a function argumentsLength that returns the count of arguments passed to it.
const argumentsLength = function (...args) {
  return args.length;
};

const args = [{}, null, "3"];

console.log(argumentsLength(...args));
