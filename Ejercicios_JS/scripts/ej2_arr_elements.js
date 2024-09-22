/*Take an array and remove every second element from the array.
Always keep the first element and start removing with the next element.*/
function removeEveryOther(arr) {
  const newArr = arr.filter(function (item, index) {
    if (index === 0 || index % 2 === 0) {
      return item;
    }
  });
  return newArr;
}

arr = [
  "hello",
  "hola",
  "my",
  "mi",
  "name",
  "nombre",
  "is",
  "es",
  "Eligio",
  "Fernando",
];

console.log(removeEveryOther(arr));
