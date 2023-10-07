import React, { Component } from 'react'
import Student1 from './Student1'

class getDerivedStateFromProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Marks : 100
      }
    }
    
  render() {
    return (
      <div>
        <Student1 Marks={this.state.Marks}  />
      </div>
    )
  }
}
export default getDerivedStateFromProps