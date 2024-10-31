// Método POST para agregar información al JSON de la API
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    name: "Eligio Elizarraraz",
    email: "eligio@gmail.com",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Método GET para solicitar información de la API
// Se borra method (GET por default) y los headers de la solicitud
// Se agrega el número 5 para solicitar el id#5
fetch("https://jsonplaceholder.typicode.com/users/5", {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
