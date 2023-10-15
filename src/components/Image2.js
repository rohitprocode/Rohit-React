import React, { Component } from 'react'

class Image2 extends Component {
  render() {
    if(this.props.pic === "No Image"){
      throw new Error("No Image")
    }
    return (
      <div>
        <img src={this.props.pic} width={200}/>
      </div>
    )
  }
}

export default Image2
