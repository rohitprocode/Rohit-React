import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Rathore "
    }
    this.greetFunction = this.greetFunction.bind(this)
  }

  greetFunction(ChildMessage){
    alert (`Rohit ${this.state.message} : ${ChildMessage} `)
  }
  
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetFunction} />
      </div>
    )
  }
}

export default ParentComponent
