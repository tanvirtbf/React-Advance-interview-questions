import { useCallback, useMemo, useState } from 'react'
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
    setPosts((prevState)=>[
      ...prevState,
      {id:Date.now(),title:"A new Title is here"}
    ])
  },[])

  const ExpensivePostMemo = useMemo(()=>{
    return <ExpensiveComp posts={posts} addPost={addPost}/>
  },[posts,addPost])

  return (
    <div>
      {ExpensivePostMemo}
      <button onClick={()=> setCount(count+1)}>{count}</button>
    </div>
  )
}

export default UseCallBack
