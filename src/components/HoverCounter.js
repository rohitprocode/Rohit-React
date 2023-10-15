import React, { Component } from 'react'

export default class HoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    HoverCount = () =>{
        this.setState(prevState=>{
            return {count : prevState.count + 1}
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
        <h2 onMouseOver={this.HoverCount} >Hovered {count} times</h2>
      </div>
    )
  }
}
