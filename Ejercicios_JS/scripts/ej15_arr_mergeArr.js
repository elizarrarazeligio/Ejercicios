/* You are given two sorted arrays that both only contain integers.
Your task is to find a way to merge them into a single one, sorted in asc order.
Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers.
If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers.
Remove duplicated in the returned result. */

//Don't remove duplicates
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

//Removes duplicates
function mergeArrays1(arr1, arr2) {
  let newArr = new Set(arr1.concat(arr2));
  newArr = Array.from(newArr);
  return newArr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays1([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
