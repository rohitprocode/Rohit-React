import React, { Component } from 'react'

export default class HigherOrder extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    Count = () =>{
        this.setState(preState =>{
            return {count : preState.count + 1}
        })
    }
    
  render() {
    return (
      <div>
        <h2>Hey, there i am using whatsapp</h2>
        <h3>Count Value = {this.state.count}</h3>
        <button onClick={this.Count}>Click Here</button>
      </div>
    )
  }
}
