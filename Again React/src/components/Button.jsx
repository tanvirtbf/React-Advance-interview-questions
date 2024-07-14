import React from 'react'

const Button = ({changeColor}) => {
  return (
    <button onClick={()=> changeColor("green")}>
      Button
    </button>
  )
}

export default Button
