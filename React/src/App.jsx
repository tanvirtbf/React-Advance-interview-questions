import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red");




  return (
    <>
      <Button color={color} />
      <button onClick={() => setColor('green')}>Change Background Color</button>
    </>
  );
}

export default App;
