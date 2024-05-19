import { useState } from 'react'

function useCounting(initValue = 0) {
  const [count,setCount] = useState(initValue)

  const increment = (value = 1) => {
    setCount((prevState) => prevState + value)
  }
  const decrement = (value = 1) => {
    setCount((prevState) => prevState - value)
  }

  return {count,increment,decrement}
}

export default useCounting


