let str1 = "Hello\nWorld";
let str2 = `Hello
World`;

console.log(str1 == str2);
console.log(
  [].__proto__,
  [].__proto__.__proto__,
  [].__proto__.__proto__.__proto__
);

console.log(str1.slice(-str1.length, 1));

let a = 3;
let b = new Number(3);

let c = 3;

const arr = [4, 6, -1, 3, 10, 4];

const max = Math.max(...arr);
console.log(max);

const json = '{"name": "Yo", "husbands": 3}';
const result = JSON.parse(json);
console.log(typeof json, typeof result, result.name, result.husbands);

console.log(+true);
console.log(!"Test");

if ([]) {
  console.log(1);
}
c = 42;
console.log(c);

let i = 0;
for (i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);

arr << console.log(arr);

console.log(parseInt("a123"));

console.log("2" > "12");

let y = 1;
let x = (y = 2);
console.log(x);

let employee = function () {};
employee.prototype.dep = "Dev";
let programmer = new employee();
programmer.dep = "JS";
console.log(programmer.dep);

const f = function g() {};
const g = function () {};

function e() {}

obj = {};

obj = { ...obj, a: 1 };

console.log(obj);

console.log(arr);
arr.shift();
console.log(arr);

let ig = 0;
while (ig++ < 3) {
  console.log(ig);
}

console.log(arr.fill(1));
