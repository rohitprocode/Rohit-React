import React, { Component } from 'react'

class Student1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         NewMarks : this.props.Marks
      }
    }
    
    static getDerivedStateFromProps(props,state){
        // console.log(props ,state )
        if(props.Marks !== state.NewMarks){
            console.log(props ,state ) 
            return {NewMarks : props.Marks} 
        }
        return null   
    }
  render() {
    // console.log('Student1')
    return (
      <div>
        <h1>{this.state.NewMarks}</h1>
      </div>
    )
  }
}

export default Student1
