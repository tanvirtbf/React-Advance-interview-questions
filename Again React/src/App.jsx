import "./App.css";
import { Fragment } from "react";
import Profiles  from "./components/Profile"; 

function App() {

  const tanvir = {
    name:"Tanvir",
    status:"Coder"
  }
  const sadia = {
    name:"Sadia",
    status:"House Maker"
  }

  return (
    <Fragment>
      <Profiles {...tanvir} >
        <h1>This is a Profile</h1>
      </Profiles>
      <Profiles name={sadia.name} status={sadia.status}>
        <h1>This is a Second Profile</h1>
      </Profiles>
    </Fragment>
  );
}

export default App;
