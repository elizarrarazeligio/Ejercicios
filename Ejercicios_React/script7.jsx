import { useState, useCallback } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = useCallback(() => {
    console.log("increase counter");
    setCounter((prev) => prev + 1);
  }, []);

  return <Button onClick={handleIncrease} />;
}

function Button(props) {
  console.log("render Button");
  const { onClick } = props;
  return <button onClick={onClick}>Haz clic aquí</button>;
}

ReactDOM.render(
  <>
    <Counter />
  </>,
  document.querySelector("#root")
);
