import React, { useCallback, useMemo, useState } from 'react'
import ExpensiveComp from './ExpensiveComp'

const samplePosts = [
  {id:1,title:'Hello, Iam Tanvir'},
  {id:2,title:'Hello, I am Sabbir'},
  {id:3,title:'Hello, I am Rifat'},
  {id:4,title:'Hello, I am Riduan'},
  {id:5,title:'Hello, I am Mustak'},
]

const UseCallBack = () => {
  const [posts,setPosts] = useState(samplePosts)
  const [count,setCount] = useState(0)

  const addPost = useCallback(()=>{
    setPosts((prevState)=> [
      ...prevState,
      {id:Date.now(),title:"A New Post"}
    ])
  },[])


  return (
    <div>
      <ExpensiveComp posts={posts} addPost={addPost}/>
      <button onClick={()=> setCount(count+1)}>{count}</button>
      {/* <button onClick={addPost}>ADD Post</button> */}
    </div>
  )
}

export default UseCallBack
