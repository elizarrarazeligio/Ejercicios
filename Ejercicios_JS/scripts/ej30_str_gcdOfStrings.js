/*
Greates Common Divisor of Strings

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
(i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. */

// My solution (60 ms)
const gcdOfStrings = function (str1, str2) {
  const gcd = greatestCommonDivisor(str1.length, str2.length);
  return str1 + str2 === str2 + str1 ? str1.substring(0, gcd) : "";
};

// greatest common divisor of two numbers
const greatestCommonDivisor = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
    console.log(a, b, temp);
  }
  return a;
};

// Fater Runtime Solution (33 ms)
var gcdOfStrings2 = function (str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let minLen;

  let join1 = str1.concat(str2);
  let join2 = str2.concat(str1);

  if (join1 !== join2) {
    return "";
  }

  let gcd = 1;

  if (len1 > len2) {
    minLen = len2;
  } else {
    minLen = len1;
  }

  for (let i = 2; i <= minLen; i++) {
    if (len1 % i == 0 && len2 % i == 0) {
      gcd = i;
    }
  }

  return str1.slice(0, gcd);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));
