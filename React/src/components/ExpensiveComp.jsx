import React from 'react'

const ExpensiveComp = ({posts}) => {
  console.log('Expensive component rendered')
  return (
    <div>
      {posts}
    </div>
  )
}

export default ExpensiveComp
