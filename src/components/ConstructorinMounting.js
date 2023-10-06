import React, { Component, StrictMode } from 'react'
import StudentGetDSFprop from './StudentGetDSFprop';

class ConstructorinMounting extends Component {
    constructor(props) {
      super(props)
      // console.log('Welcome to ConstructorInMounting');
      // console.log(props.surname)
      this.state={
        roll : '101'
      }
    }

    static getDerivedStateFromProps(props,state){
        // console.log(props,state);
        return null
    }

    componentDidMount(){
      console.log("ComponentDidMount is Here")
    }

  render() {
    console.log('School')
    return (
      <div>
        <h1>School</h1>
        <StudentGetDSFprop name={'Rohit Rathore'} roll={this.state.roll}/>
      </div>
    )
  }
}

export default ConstructorinMounting