import { useState } from "react";
import "./App.css";

function App() {

  let formObj = {}
  const [data,setData] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      formObj
    ])
  };

  const handleInput = (e) => {
    formObj = {
      ...formObj,
      [e.target.name] : e.target.value
    }
    console.log(formObj)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onInput={handleInput}/>
        <input type="text" name="lastName" onInput={handleInput}/>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        {data.map((item,i) => <li key={i}>{item.firstName} and {item.lastName}</li> )}
      </div>
    </>
  );
}

export default App;
