import "./App.css";
import ComponentA from "./components/customHook/ComponentA";
import ComponentB from "./components/customHook/ComponentB";

const App = () => {

  return (
    <div style={{width: '100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',gap: '100px'}}>
      <ComponentA />
      <ComponentB />
    </div>
  );
};

export default App;
