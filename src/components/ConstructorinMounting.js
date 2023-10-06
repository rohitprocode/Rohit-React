import React, { Component } from 'react'

export default class ConstructorinMounting extends Component {
    constructor(props) {
      super(props)
      console.log('ConstructorInMounting');
    }
    
  render() {
    return (
      <div>
        <h1>Hello Rohit</h1>
      </div>
    )
  }
}
