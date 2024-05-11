import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red");

  const changeColor = (value) => {
    if (color === "green") {
      setColor("red");
    } else {
      setColor(value);
    }
  };

  return (
    <>
      <h1 style={{ backgroundColor: color }}>Hello World</h1>
      <Button changeColor={changeColor} />
    </>
  );
}

export default App;
