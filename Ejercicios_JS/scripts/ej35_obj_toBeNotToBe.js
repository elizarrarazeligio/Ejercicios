/* To Be or Not To Be
Write a function expect that helps developers test their code.
It should take in any value val and return an object with the following two functions.

- toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
- notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal". */
const expect = function (val) {
  return {
    toBe(num) {
      if (num === val) return true;
      throw new Error("Not Equal");
    },
    notToBe(num) {
      if (num !== val) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(10).toBe(10));
console.log(expect(10).toBe(1));
console.log(expect(8).notToBe(1));
console.log(expect(10).notToBe(10));
