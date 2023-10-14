import React, { Component } from 'react'
import UserErrorBoundary from './UserErrorBoundary'
export default class ErrorBoundary extends Component {
  render() {
    if(true){
        throw new Error("Custom Error Message")
    }
    return (
      <div>
        <h1>Error Boundary in React Js</h1>
        <UserErrorBoundary/>
      </div>
    )
  }
}
