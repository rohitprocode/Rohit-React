import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
    addOne(){
        this.setState((a)=>{
            console.log(a)
        })
    }

    addFive(){
        this.addOne()
        this.addOne()
        this.addOne()
        this.addOne()
        this.addOne()
    }

  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button onClick={()=>this.addOne()}>Click to Add +1</button>
      </div>
    )
  }
}

export default Counter
