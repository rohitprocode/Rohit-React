import React, { Component } from 'react'

class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}
  Addition(){
    this.setState((preValue,props)=>({
      count : preValue.count + props.count
    }))
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <h1>COUNT ADDITION</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>this.Addition()} >Click Here</button>
      </div>
    )
  }
}

export default Counter

