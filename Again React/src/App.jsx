import "./App.css";

function App() {
  let formObj = {}
  const handleInput = (e) => {
    console.log("Handle Input Called")
    formObj = {
      ...formObj,
      [e.target.name]:e.target.value
    }
    console.log(formObj)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted..')
  }
  return (
    <>
      <h2>Event Handling</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onInput={handleInput} />
        <input type="text" name="lastName" onInput={handleInput} />
        <button type="submit">Click</button>
      </form>
    </>
  )
}

export default App;
