
import React, { Component } from 'react'

class Student extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name : "Rohit" , roll : this.props.roll
    }
  }
  
  changeText(){
    this.setState({
        name : this.state.name = "Mohit",
        roll : this.state.roll = 105
    })
  }

  render() {
    return (
      <div>
        <h1>My Name is {this.state.name} and my roll no is {this.state.roll}</h1>
        <button onClick={()=>this.changeText()} >Click to change</button>
      </div>
    )
  }
}

export default Student
