import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevState => prevState+1);
    },1000);

    return ()=>{
      clearInterval(interval)
    }
  }, []);

  return <>{count}</>;
};

export default App;
