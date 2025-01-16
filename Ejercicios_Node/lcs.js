// DYNAMIC PROGRAMMING - LONGEST COMMON SUBSEQUENCE
// Bottom-Up DP approach of two strings converted into arrays
// It can be done ommiting the array conversion step and directly using strings
const str1 = process.argv[2];
const str2 = process.argv[3];

function toArray(str) {
  return str.split("");
}

const arr1 = toArray(str1);
const arr2 = toArray(str2);

function lcs(arr1, arr2) {
  const m = arr1.length;
  const n = arr2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  console.log(dp);

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr1[i - 1] == arr2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      console.log(dp);
    }
  }
  console.log(dp[m][n]);
}

lcs(arr1, arr2);
