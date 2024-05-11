import "./App.css";

function App() {
  const items = [
    'tanvir',
    'sadia',
    'maymuna',
    'humaira',
    'ayesha'
  ]
  return (
    <>
      <h1 style={{backgroundColor: 'red',fontSize:'25px'}}>Hello World!</h1>
      {items}
      {items.map(item => <li key={item}>{item}</li>)}
    </>
  );
}

export default App;
