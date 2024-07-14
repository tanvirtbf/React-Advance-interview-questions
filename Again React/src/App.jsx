import "./App.css";

function App() {
  const handleInput = (e,text) => {
    console.log(e)
    console.log(text)
    console.log("Handle Input Called")
  }
  return (
    <>
      <h2>Event Handling</h2>
      <input type="text" onInput={(e)=>handleInput(e,"hello")} />
    </>
  )
}

export default App;
