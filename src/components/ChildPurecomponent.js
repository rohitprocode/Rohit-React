import React, { Component } from 'react'

class ChildPurecomponent extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.age}</h3>
      </div>
    )
  }
}

export default ChildPurecomponent
