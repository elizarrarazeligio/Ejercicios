// Creates and add values to a Set in ES6
function addToSet() {
  const set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);

  set.add("Taco");
  set.add("Cat");
  set.add("Awesome");

  console.log(Array.from(set));
  return set;
}
addToSet();

// Removes values from a Set in ES6
function removeFromSet() {
  const set = new Set([1, 2, 3, 4, 5]);

  set.delete(2);
  set.delete(5);

  console.log(Array.from(set));
  return set;
}
removeFromSet();

// .has and .size methods in ES6
function checkValueAndSize(arrToBeSet, checkValue) {
  const set = new Set(arrToBeSet);

  const hasValue = set.has(checkValue);
  const size = set.size;

  const res = [hasValue, size];
  console.log(res);
  return res;
}
checkValueAndSize([1, 2, 3, 4, 5], 3);

// Using spread [...] to return Sets as Arrays
function setToArray(set) {
  const res = [...set];
  console.log(set, res);
  return res;
}
setToArray(new Set([1, 2, 3]));
