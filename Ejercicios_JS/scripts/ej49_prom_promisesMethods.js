// Métodos estáticos de Promises

// Promise.resolve()
Promise.resolve("Promise resuelto").then(function (valor) {
  console.log(valor);
});

// Promise.reject()
Promise.reject("Promise rechazado").catch(function (valor) {
  console.log(valor);
});

// Promise.all()
const someCondition1 = true;
const someCondition2 = true;
// Crear 1er promise
const firstPromise = new Promise(function (resolve, reject) {
  if (someCondition1) {
    resolve("Primer promise");
  } else {
    reject();
  }
});

// Crear 2do promise
const secondPromise = new Promise(function (resolve, reject) {
  if (someCondition2) {
    resolve("Segundo promise");
  } else {
    reject();
  }
});

// Crear array con promises
const promises = [firstPromise, secondPromise];

// Pasa el array a método Promise.all()
Promise.all(promises).then((results) => {
  console.log(results);
});
