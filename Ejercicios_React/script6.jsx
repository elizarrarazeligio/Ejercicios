// Efectos -> hook useEffect()

// Componente de clase
// ejemplo de la unidad anterior
class NeonCursorClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { top: 0, left: 0 };
  }

  // este método es llamado justo después del montaje: estamos creando un efecto secundario
  componentDidMount() {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.body.classList.add("no-cursor");
  }

  // este método es llamado inmediatamente antes del desmontaje: estamos eliminando los efectos
  componentWillUnmount() {
    document.body.classList.remove("no-cursor");
    document.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = (event) => {
    this.setState({
      top: event.pageY,
      left: event.pageX,
    });
  };

  render() {
    return (
      <img
        src="./cursor.png"
        width={30}
        style={{
          position: "absolute",
          top: this.state.top,
          left: this.state.left,
          pointerEvents: "none",
        }}
      />
    );
  }
}

// Componente funcional
function NeonCursorFunctional() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        top: event.pageY,
        left: event.pageX,
      });
    }

    // lista de acciones dentro de un hook
    document.addEventListener("mousemove", handleMouseMove);
    document.body.classList.add("no-cursor");

    // estamos devolviendo una función que elimina nuestros efectos
    return () => {
      document.body.classList.remove("no-cursor");
      document.removeEventListener("mousemove", handleMouseMove);
    };

    // Separación de forma lógica de useEffect()
    // React.useEffect(() => {
    //   function handleMouseMove(event) {
    //     setPosition({
    //       top: event.pageY,
    //       left: event.pageX,
    //     });
    //   }

    //   document.addEventListener("mousemove", handleMouseMove);

    //   return () => {
    //     document.removeEventListener("mousemove", handleMouseMove);
    //   };
    // });

    // React.useEffect(() => {
    //   document.body.classList.add("no-cursor");

    //   return () => {
    //     document.body.classList.remove("no-cursor");
    //   };
    // });
  });

  return (
    <img
      src="./cursor.png"
      width={30}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        pointerEvents: "none",
      }}
    />
  );
}

ReactDOM.render(
  <>
    <NeonCursorClass />
    <NeonCursorFunctional />
  </>,
  document.querySelector("#root")
);
