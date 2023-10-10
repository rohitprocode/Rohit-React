import React, { PureComponent } from 'react'
import ChildPurecomponent from './ChildPurecomponent'

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
        <h1>My Age is : <ChildPurecomponent age={this.state.age} /> </h1>
        <button onClick={()=>this.setState({age : 11})} >Update</button>
      </div>
    )
  }
}

export default PyorComponent
