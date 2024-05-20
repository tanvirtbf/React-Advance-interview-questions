import { useState } from "react";

export default function useLocalStorage(key,initValue){
  const [val,setVal] = useState(()=>{
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initValue;
  })

  const setValue = (value) => {
    setVal(value)
    localStorage.setItem(key,JSON.stringify(value))
  } 

  return {val,setValue}
}