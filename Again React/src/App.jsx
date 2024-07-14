import "./App.css";
import { Fragment, useState } from "react";
import Button from "./components/Button";

function App() {
  const [color,setColor] = useState("orange")
  const changeColor = (myColor) => {
    setColor(myColor)
  }
  return (
    <Fragment>
      <div style={{backgroundColor:color}}>Change My Color</div>
      <Button changeColor={changeColor} />
    </Fragment>
  );
}

export default App;
