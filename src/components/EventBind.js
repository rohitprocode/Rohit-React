import React, { Component } from 'react'

//Binding in render method
// class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message : "Hello"
//       }
//     }
//     changeText(){
//         this.setState({
//             message : "Bye"
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.changeText.bind(this)} >Click</button>
//       </div>
//     )
//   }
// }

//Binding as Arrow function in render method

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
    }
    changeText(){
        this.setState({
            message : "Bye"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeText()} >Click</button>
      </div>
    )
  }
}

export default EventBind
