import React, { useState } from 'react'

const Button = ({color}) => {
  const [num,setNum] = useState(0)
  console.log("btn rendered")
  return (
    <button style={{backgroundColor:color}} onClick={()=> setNum(num+1)}>
      Button {num}
    </button>
  )
}

export default Button
