import { useState } from "react";
import "./App.css";
import DestroyCom from "./components/DestroyCom";


const App = () => {

  const [hide,setHide] = useState(true)

  return (
    <>
      {hide ? <DestroyCom /> : null}
      <button onClick={() => setHide(!hide)}>Hide or Show</button>
    </>
  );
};

export default App;
