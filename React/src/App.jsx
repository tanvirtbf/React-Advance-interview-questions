import "./App.css";

function App() {
  const userName = ''
  return (
    <>
      <h1>Hello World!</h1>
      {userName? <h1>{userName}</h1> : null}
    </>
  );
}

export default App;
