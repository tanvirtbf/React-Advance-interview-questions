import React,{memo} from 'react'

const ExpensiveComp = ({posts,addPost}) => {
  console.log('Expensive component rendered')
  return (
    <div>
      {posts.map((item)=> {
        console.log('rendering item ',item.id)
        return <h6 key={item.id}>{item.title}</h6>
      })}
      <button onClick={addPost}>ADD Post</button>
    </div>
  )
}

export default memo(ExpensiveComp)
