import React, { useEffect, useState } from 'react'

const Example2 = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    const timerId = setInterval(()=>{
      setCount((prev)=> prev+1)
    },1000)
    return ()=>{
      clearInterval(timerId)
    }
  },[])
  return (
    <div>
      {count}
    </div>
  )
}

export default Example2
