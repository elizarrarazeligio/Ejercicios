const newPromise = new Promise(function (resolve, reject) {
  const rand = Math.random() >= 0.5 ? true : false;
  console.log(rand);

  if (rand) {
    resolve("Solicitud procesada!");
  } else {
    reject("Solicitud rechazada!");
  }
});

newPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value + " Sentimos las molestias!");
  })
  .finally(function () {
    console.log("Prometemos que recibimos la solicitud");
  });
