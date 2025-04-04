import React from 'react'

const Child = ({setPara}) => {
  return (
    <div className='child'>
    <h1>Child Component</h1>
    <form>
    <input type='text'
    onChange={(e)=> {
        setPara(e.target.value)
    }}
     />
    </form>
    </div>
  )
}

export default Child