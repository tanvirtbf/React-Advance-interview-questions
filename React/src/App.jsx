import { useState } from "react";
import "./App.css";

const App = () => {
  let [formObj,setFormObj] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formObj)
  }
  const handleInput = (e) => {
    // setFormObj({
    //   ...formObj,
    //   [e.target.name] : e.target.value
    // })
    setFormObj((prevObj) => ({...prevObj, [e.target.name] : e.target.value}))
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onInput={handleInput} />
        <input type="text" name="lastName" onInput={handleInput} />
        <input type="text" name="address" onInput={handleInput} />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <li>{formObj.firstName}</li>
      </div>
    </>
  );
};

export default App;
