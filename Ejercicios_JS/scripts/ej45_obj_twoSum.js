/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

var twoSum = function (nums, target) {
  // Create an object to store numbers and their corresponding indices
  let numToIndexMap = {};

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the target and the current number
    let diff = target - nums[i];

    // Check if the difference already exists in the object
    if (numToIndexMap.hasOwnProperty(diff)) {
      // If it exists, return the indices of the current number and the number that adds up to the target
      return [i, numToIndexMap[diff]];
    }

    // If it doesn't exist, add the current number and its index to the object
    numToIndexMap[nums[i]] = i;
  }

  // If no two numbers add up to the target, return null
  return null;
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
