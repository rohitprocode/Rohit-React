import React, { Component, StrictMode } from 'react'

class ConstructorinMounting extends Component {
    constructor(props) {
      super(props)
      console.log('Welcome to ConstructorInMounting');
      console.log(props.name)
    }
  render() {
    return (
      <div>
        <h1>Hello Rohit</h1>
      </div>
    )
  }
}

export default ConstructorinMounting