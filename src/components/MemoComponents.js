import React, { Component } from 'react'
import ChildMemocom from './ChildMemocom'

class MemoComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 50
      }
    }
    
  render() {
    console.log("Re-rendered")
    return (
      <div>
        <h1>Value <ChildMemocom value={this.state.count} /></h1>
        <button onClick={()=>this.setState({count: 50})} >Update</button>
      </div>
    )
  }
}


export default MemoComponents
