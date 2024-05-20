import "./App.css";
import ComponentA from "./components/customhooks/ComponentA";
import ComponentB from "./components/customhooks/ComponentB";


const App = () => {

  return (
    <div style={{width: '100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',gap: '100px'}}>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

export default App;
