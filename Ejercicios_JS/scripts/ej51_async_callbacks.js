// Synchronous callback
[1, 2, 3, 4].forEach((i) => {
  console.log("processing sync", i);
});

// Asynchronous callback
function asyncForEach(array, cb) {
  array.forEach(function (i) {
    setTimeout(cb, 5000, i);
  });
}

asyncForEach([1, 2, 3, 4], function (i) {
  console.log("processing async", i);
});
