function handleClick() {
  console.log("¡No hagas clic en mi!");
}

function handleMouseEnter() {
  console.log("¡Hey, estás en mi zona!");
}

function handleMouseLeave() {
  console.log("¿...a dónde irías?");
}

ReactDOM.render(
  <button
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    ¡Juega conmigo!
  </button>,
  document.querySelector("#root")
);
