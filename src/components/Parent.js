import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    let[para, setPara] = useState('')
  return (
    <div className='parent'>
        <h1>Parent Component</h1>
        <p>{para}</p>

        <Child
        setPara = {setPara}
         />
    </div>
  )
}

export default Parent