// la variable responsable del estado de la aplicación
let isClicked = false;

// esta función se encarga de renderizar la interfaz
// depende del valor de isClicked
function renderAll() {
  ReactDOM.render(
    <div>
      <h1>¡Hola, mundo!</h1>
      <button type="button">¡Haz clic sobre mí!</button>

      <div className={isClicked ? "active" : ""}>
        <div>{isClicked ? "¡Se hizo clic!" : "Esperando el clic..."}</div>
      </div>
    </div>,
    document.querySelector("#root")
  );
}

// llama para realizar el renderizado inicial cuando se abre la página
renderAll();

// cuando se produce el evento, cambiamos el valor de las variables
// luego vuelve a renderizar la página
const element = document.querySelector("button");
element.addEventListener("click", () => {
  isClicked = true;
  renderAll();
});
