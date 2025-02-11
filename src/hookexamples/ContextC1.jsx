import React, { useState } from 'react'
import ContextC2 from './ContextC2'

const ContextC1 = () => {
    const[count,setcount]=useState(0);
    let incre = () =>{
        setcount(count+1);
    }
  return (
    <div>ContextC1
        <button onClick={incre}>click</button>
        <hr />
        <ContextC2/>
    </div>
  )
}

export default ContextC1