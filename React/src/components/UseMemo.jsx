import { useState } from 'react'

const UseMemo = () => {
  const [name,setName] = useState("")

  const sumOfNumbers = () => {
    console.log('calculating')
    let num = 10000000
    let val = 0
    for(let i = 1; i<=num; i++){
      val += i
    }
    return val
  }
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Type Your Name' />
      <h3>sum of natural nos - {sumOfNumbers()} </h3>
    </div>
  )
}

export default UseMemo
