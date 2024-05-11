import { useState } from "react"

const Button = ({color}) => {
  const [num,setNum] = useState(0)
  console.log('button component re-render')
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={() => setNum(num + 1)}>Change Color {num}</button>
    </div>
  )
}

export default Button
