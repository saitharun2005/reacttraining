import React from 'react'

const FBCStateEx = () => {
    const[value,setValue]=React.useState(0);
    console.log(value);
    const changevalue=()=>{
        setValue(1000);
    }
    const increment=()=>{
        setValue(value+1)
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changevalue}>ChangeValue</button>
        <button onClick={increment}>Login</button>
    </div>
  )
}

export default FBCStateEx