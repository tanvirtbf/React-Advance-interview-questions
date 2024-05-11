import "./App.css";

function App() {
  const a = 2;
  const b = 3;
  function add(a,b){
    return a+b;
  }
  return (
    <>
      <h1>Hello World!</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{add(a,b)}</h1>
      <h1>{new Date().toLocaleDateString()}</h1>
    </>
  );
}

export default App;
