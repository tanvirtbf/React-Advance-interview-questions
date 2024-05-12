import { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0)
  const handleClick = () => {
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    // setNum(num + 1)
    setNum((prevState) => prevState + 1)
    setNum((prevState) => prevState + 1)
    setNum((prevState) => prevState + 1)
    setNum((prevState) => prevState + 1)
  }
  return (
    <>
      <h1>Number : {num} </h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
