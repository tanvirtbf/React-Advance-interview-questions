import { useState } from "react";
import "./App.css";

function App() {
  const [state,setState] = useState(0)
  const click = () => {
    setState((prevState)=>prevState+1)
    setState((prevState)=>prevState+1)
    setState((prevState)=>prevState+1)
  }
  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={click}>Click me {state}</button>
    </>
  );
}

export default App;
