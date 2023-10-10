import React, { PureComponent } from 'react'

class PyorComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         age : 1
      }
    }
    
  render() {
    console.log("Re-rendered")
    return (
      <div>
        <h1>My Age is : {this.state.age}</h1>
        <button onClick={()=>this.setState({age : this.state.age + 1})} >Update</button>
      </div>
    )
  }
}

export default PyorComponent
