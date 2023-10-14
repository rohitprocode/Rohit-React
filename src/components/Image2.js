import React, { Component } from 'react'

export default class Image2 extends Component {
  render() {
    return (
      <div>
        <h1>Image2 file</h1>
        <img src={this.props.Pic} width={200} />
      </div>
    )
  }
}
