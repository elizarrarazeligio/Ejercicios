/* You are given a method called main, make it print the line Hello World!,
(yes, that includes a new line character at the end) and don't return anything

Note that for some languages, the function main is the entry point of the program.
Here's how it will be tested:

    Solution.main("parameter1","parameter2"); */

const Solution = {
  main(par1) {
    console.log("Hello World!");
  },
};

class Solution2 {
  static main() {
    console.log("Hello World!");
  }
}

Solution3 = {};
Solution3.main = () => {
  console.log("Hello World!");
};
