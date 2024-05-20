import { useState } from "react";

export default function useCounting(initValue){
  const [count,setCount] = useState(initValue)

  const increment = (value) => {
    setCount(count + value)
  }
  const decrement = (value) => {
    setCount(count - value)
  }

  return {count, increment, decrement}
}