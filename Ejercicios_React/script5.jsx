// Estado local -> hook useState()

// el componente de la clase User
class ClassUser extends React.Component {
  constructor(props) {
    super(props);

    // valor inicial del estado interno
    this.state = { rating: 0 };
  }

  /*
   * controladores de eventos para actualizar el estado interno
   */
  handleLike = () => {
    this.setState({ rating: 1 });
  };

  handleDislike = () => {
    this.setState({ rating: -1 });
  };

  render() {
    return (
      <div className="user">
        <img src={`img/${this.props.id}.png`} width="75" />
        {this.props.name}
        <div className="rating">
          <button onClick={this.handleLike} disabled={this.state.rating > 0}>
            👍
          </button>
          {this.state.rating}
          <button onClick={this.handleDislike} disabled={this.state.rating < 0}>
            👎
          </button>
        </div>
      </div>
    );
  }
}

// el componente funcional User
function FunctionalUser(props) {
  // the hook that manages internal state
  const [rating, setRating] = React.useState(0);

  /*
   * controladores de eventos para actualizar el estado interno
   */
  function handleLike() {
    setRating(1);
  }

  function handleDislike() {
    setRating(-1);
  }

  return (
    <div className="user">
      <img src={`img/${props.id}.png`} width="75" />
      {props.name}
      <div className="rating">
        <button onClick={handleLike} disabled={rating > 0}>
          👍
        </button>
        {rating}
        <button onClick={handleDislike} disabled={rating < 0}>
          👎
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(
  <>
    <FunctionalUser />
    <ClassUser />
  </>,
  document.querySelector("#root")
);
