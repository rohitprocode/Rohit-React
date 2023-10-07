import React, { Component } from 'react'
import Student1 from './Student1'

class getDerivedStateFromProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Marks : 100
      }
    }

    clickHandler = () =>{
        this.setState({
            Marks : this.state.Marks + 2
        })
    }

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.Marks < 110){
            // console.log(nextProps , " : " , nextState )
            return true
        }
        // console.log(nextProps, " : " , nextState)
        return false
    }

  render() {
    // console.log(this.state.Marks)
    return (
      <div>
        <Student1 Marks={this.state.Marks}  />
        <button onClick={this.clickHandler} >Click Here</button>
      </div>
    )
  }
}
export default getDerivedStateFromProps