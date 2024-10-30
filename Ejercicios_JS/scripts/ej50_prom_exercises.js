// Primer ejercicio
// Función temporizador
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(() => console.log("2 segundos han transcurrido"));
wait(5000).then(() => console.log("5 segundos han transcurrido"));
wait(10000).then(() => console.log("10 segundos han transcurrido"));

/* ------------------------------------------------------------------------ */

// Segundo ejercicio
// Carga una imagen o muestra error en la consola
function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.onload = resolve;
    image.onerror = reject;
  });
}

loadImage(
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg"
)
  .then((evt) => {
    document.body.append(evt.target);
  })
  .catch(() => {
    console.log("Image not loaded. ERROR! ERROR!");
  });
