import React, { Component } from 'react'
class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["tharun", "572" ,"sreeja", "chetan","571","573"],
            num:0
            
        }
    }

    changeNumber=()=>{
        this.setState({num:300})
    }
    increment=(num)=>{
        this.setState({num:this.state.num+1})
    }
    decrement=(num)=>{
        this.setState({num:this.state.num-1})
    }
  render() {
    console.log(this.state)
    return (
      <div>
        {
            this.state.users.map((user, i)=>{
                return <li key={i}>{user}</li>
            })
        }
        <h1>LoginCount:{this.state.num}</h1>
        <button onClick={this.changeNumber}>changeNumber</button><br /><br />
        <button onClick={this.increment}>LOGIN</button>
        <button onClick={this.decrement}>LOGOUT</button>
      </div>
    )
  }
}
export default CBCStateEx;