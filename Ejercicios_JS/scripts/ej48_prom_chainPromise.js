const newPromise = new Promise(function (resolve, reject) {
  resolve("Un Mississippi");
});

function firstAction(value) {
  return `${value}, dos Mississippi`;
}

function secondAction(value) {
  return `${value}, tres Mississippi.`;
}

function thirdAction(value) {
  console.log(value);
}

newPromise.then(firstAction).then(secondAction).then(thirdAction);

const secondPromise = new Promise(function (resolve, reject) {
  reject("Un Mississippi");
});

secondPromise.then(firstAction).then(secondAction).catch(thirdAction);
