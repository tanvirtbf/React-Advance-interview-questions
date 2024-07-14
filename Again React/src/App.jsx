import "./App.css";

function App() {
  const handleInput = (text) => {
    console.log(text)
    console.log("Handle Input Called")
  }
  return (
    <>
      <h2>Event Handling</h2>
      <input type="text" onInput={()=>handleInput("hello")} />
    </>
  )
}

export default App;
