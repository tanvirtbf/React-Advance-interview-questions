import "./App.css";

function App() {
  const handleInput = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <input type="text" onInput={handleInput} />
    </>
  )
}

export default App;
