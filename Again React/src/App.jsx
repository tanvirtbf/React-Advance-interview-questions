import "./App.css";
import { Fragment } from "react";

function App() {
  const items  = [
    "tanvir",
    "sadia",
    "maymuna"
  ]
  return (
    <Fragment>
      <h1>Hello World!</h1>
      <div>{items.map((item)=> <h1 key={item}>{item}</h1>)}</div>
    </Fragment>
  );
}

export default App;
