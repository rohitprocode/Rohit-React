import React, { Component, StrictMode } from 'react'
import GetDSFprop from './GetDSFprop';

class ConstructorinMounting extends Component {
    constructor(props) {
      super(props)
      console.log('Welcome to ConstructorInMounting');
      console.log(props.name)
      this.state={
        roll : '101'
      }
    }
  render() {
    return (
      <div>
        <GetDSFprop name={'Rohit Rathore'} roll={this.state.roll}/>
      </div>
    )
  }
}

export default ConstructorinMounting