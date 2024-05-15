import React,{memo} from 'react'

const ExpensiveComp = ({posts}) => {
  console.log('Expensive component rendered')
  return (
    <div>
      {posts}
    </div>
  )
}

export default memo(ExpensiveComp)
