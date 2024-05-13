import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [hour,setHour] = useState(11)
  const [minute,setMinute] = useState(59)
  const [second,setSecond] = useState(55)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(second+1)
      if(second === 59){
        setMinute(minute+1)
        setSecond(0)
      }
      if(minute ===59){
        setHour(hour+1)
        setMinute(0)
      }
    },1000);
    return ()=>{
      console.log('clear')
      clearInterval(interval)
    }
  }, [second,minute,hour]);
  return <>{`${hour} : ${minute} : ${second}`}</>;
};
export default App;
