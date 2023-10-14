import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalinReact extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <h1>Portal in React js</h1>
      </div>,
      document.getElementById('Other-root')
    )
  }
}

export default PortalinReact
