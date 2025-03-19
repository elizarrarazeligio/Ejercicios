// Creating a 3 length Int16Array (2 bytes size)
const i8 = new Int16Array(3);
console.log(i8);

// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
console.log(buffer.byteLength);
console.log(i8View.byteLength);
console.log(i8View);

// Access through the view
i8View[0] = 42;
console.log(i8View);

// Not possible to use neither pop() nor push() in typed arrays.
// i8View.push(12);
// i8View.pop();

// ==================== EXERCISE 1 ====================
// First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.
const byteSize2 = 64;
const buffer2 = new ArrayBuffer(byteSize2);
const i32View = new Int32Array(buffer2);

console.log(i32View);
