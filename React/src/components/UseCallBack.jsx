import React, { useState } from 'react'
import ExpensiveComp from './ExpensiveComp'

const UseCallBack = () => {
  const [posts,setPosts] = useState("I am expensive component")
  const [count,setCount] = useState(0)

  return (
    <div>
      <ExpensiveComp posts={posts}/>
      <button onClick={()=> setCount(count+1)}>{count}</button>
      <button onClick={()=> setPosts("I am Changed")}>{posts}</button>
    </div>
  )
}

export default UseCallBack
