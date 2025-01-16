// DYNAMIC PROGRAMMING - LONGEST COMMON SUBSTRING
// Bottom-Up DP approach of two strings converted into arrays
// Output brings string length and value
const str1 = process.argv[2];
const str2 = process.argv[3];

function toArray(str) {
  return str.split("");
}

const arr1 = toArray(str1);
const arr2 = toArray(str2);

function lcs(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr1[i - 1] == arr2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        res = Math.max(res, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  console.log(dp);
  console.log(`Substring length is: ${res}`);

  let resArr = [];
  for (let i = m; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      if (dp[i][j] == res && res > 0) {
        resArr.unshift(arr1[i - 1]);
        i--;
        res--;
      }
      console.log(dp[i][j], res, resArr.join(""));
    }
  }
}

lcs(arr1, arr2);
