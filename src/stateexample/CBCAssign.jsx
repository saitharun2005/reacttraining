import React, { Component } from 'react';
// import './CBCAssign.css';  // Import CSS for styling

class CBCAssign extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      msg: "I am studying in Malla Reddy University"
    };
  }

  changemsg = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
      msg: prevState.clicked
        ? "I am studying in Malla Reddy University"
        : "I am studying in Group 3"
    }));
  };

  render() {
    let applyClass = this.state.clicked ? 'clicked' : 'unclicked';

    return (
      <div>
        <h1 className={applyClass}>{this.state.msg}</h1>
        <button onClick={this.changemsg}>Click Me</button>
      </div>
    );
  }
}

export default CBCAssign;
