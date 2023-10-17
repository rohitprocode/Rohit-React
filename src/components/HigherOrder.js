// import React, { Component } from 'react'

// export default class HigherOrder extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count : 0
//     }
//   }
//   count = () =>{
//     this.setState(prevState =>{
//       return {count : prevState.count + 1}
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>Color Full Calculator</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.count}>Click to Add</button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export function HOCRed(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2><props.cmd/></h2>
    </div>
  )
}
export function HOCGreen(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2><props.cmd/></h2>
    </div>
  )
}
export function HOCBlue(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2><props.cmd/></h2>
    </div>
  )
}
export function HOCOrange(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2><props.cmd/></h2>
    </div>
  )
}
export function HOCYellow(props) {
  return (
    <div>
      <h1>Counter</h1>
      <h2><props.cmd/></h2>
    </div>
  )
}
export class HigherOrder extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  newCounter = () =>{
    this.setState(prevState =>{
      return {count : prevState.count + 1}
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.newCounter} >Click to Add</button>
      </div>
    )
  }
}
