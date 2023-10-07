import React, { Component } from 'react'

class Student1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         NewMarks : this.props.Marks
      }
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.NewMarks}</h1>
      </div>
    )
  }
}

export default Student1
