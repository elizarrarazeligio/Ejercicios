const reduce = function (nums, fn, init) {
  let val = 0;
  if (nums.length === 0) return init;
  for (let i = 0; i < nums.length; i++) {
    console.log(val, i);
    i === 0 ? (val = fn(init, nums[i])) : (val = fn(val, nums[i]));
  }
  return val;
};

arr1 = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
  // return 0;
}

console.log(reduce(arr1, sum, 25));
