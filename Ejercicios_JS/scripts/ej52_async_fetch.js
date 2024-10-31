fetch("https://www.google.com.mx/")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Ha ocurrido un error: ", err);
  });
