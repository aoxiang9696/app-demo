import React from 'react'

function child(props) {
  return (
    <div>{Math.random()}</div>
  )
}
export default React.memo(child)