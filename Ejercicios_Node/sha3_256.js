// SHA3-256 - Secure Hash Algorithm (type 3) 256 (Bits)
// This standar converts any type of information into hashes.
// In this case, hashes are divided into 256 Bits = 32 Bytes converted to 64 Hex Digits
// (Each Byte is 2 Hexadecimal Digits)
const fs = require("fs");
const fsPromise = require("fs").promises;
const { sha3_256 } = require("js-sha3");

let hashArr = [];
let a = [];

fs.readdir("data", (err, arr) => {
  if (err) {
    console.log(err);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    fsPromise.readFile(`data/${arr[i]}`).then((data) => {
      hashArr.push(sha3_256(data));
      if (i == 255) {
        processHashes(hashArr.sort().reverse());
      }
    });
  }
});

function processHashes(arr) {
  let str = "";
  str = arr.join("");

  if (arr.length == 256) {
    str = str.concat("eligio2008@live.com.mx");
    console.log(sha3_256(str), arr.length);
  }
}
