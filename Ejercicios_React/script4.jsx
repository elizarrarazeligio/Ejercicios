// Creación de componente funcional
// un componente llamado User
function User(props) {
  return (
    <div>
      <img
        src={`https://practicum-content.s3.us-west-1.amazonaws.com/web-code/react/${props.id}.png`}
        width="75"
        alt="user picture"
      />
      <p>{props.name}</p>
    </div>
  );
}

// el código principal de la aplicación
ReactDOM.render(
  <>
    <h2>Mis amigos imaginarios:</h2>
    <User id="1" name="Gregory" />
    <User id="2" name="James" />
    <User id="3" name="Allison" />
  </>,
  document.querySelector("#root")
);
