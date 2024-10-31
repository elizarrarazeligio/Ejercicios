// Acceder a datos de encabezados
// get()
fetch("https://api.kanye.rest")
  .then((res) => {
    if (res.headers.get("server") === "cloudflare") {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data.quote);
  });

/* ---------------------------------------------------------------------- */

// Métodos del cuerpo de fetch para solicitud de respuestas
// res.json
fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

// res.text()
fetch("https://api.kanye.rest")
  .then((res) => res.text())
  .then((result) => {
    console.log(result);
  });

// res.blob()
fetch("https://api.kanye.rest")
  .then((res) => res.blob())
  .then((result) => {
    console.log(result);
  });
