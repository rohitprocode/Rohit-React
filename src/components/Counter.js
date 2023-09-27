import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  // Addition(){
  //   this.setState((preValue,props)=>({
  //     count : preValue.count + props.count
  //   }))
  //   // console.log(this.state.count)
  // }

  Addition() {
    this.setState({
      count: this.state.count + 1 
    },
    ()=> console.log(this.state.count)
    )
  
  }

  FiveAdd() {
    this.Addition();
    this.Addition();
    this.Addition();
    this.Addition();
    this.Addition();
  }
  render() {
    return (
      <div>
        <h1>COUNT ADDITION</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() => this.FiveAdd()} >Click Here</button>
      </div>
    )
  }
}

export default Counter
