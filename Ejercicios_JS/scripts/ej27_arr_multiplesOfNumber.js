function findMultiples(integer, limit) {
  let res = [];
  for (let i = integer; i <= limit; i = i + integer) {
    res.push(i);
  }
  return res;
}

console.log(findMultiples(5, 25));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));
