import React, { Component } from 'react'

export default class Image2 extends Component {
  render() {
    if(this.props.pic === "NoImage"){
        throw new Error("Image Not Found");
    }
    return <img src={this.props.pic} width={200} alt='Image' />
  }
}
