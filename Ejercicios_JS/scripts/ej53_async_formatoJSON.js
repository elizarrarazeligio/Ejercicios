fetch("https://TripleTen.yandex.com")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.user.name);
  })
  .catch((err) => {
    console.log("Error: solicitud fallida");
  });
