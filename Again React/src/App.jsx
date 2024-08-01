import { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count+1)
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  },[])
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}

export default App;
