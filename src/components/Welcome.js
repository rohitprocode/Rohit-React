// import React, {Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

// export default Welcome

//Destructuring props in render method

// import React, { Component } from 'react'

// export class Welcome extends Component {
//   render() {
//     const {name,heroName} = this.props
//     return (
//       <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//       </div>
//     )
//   }
// }

// Destructuring state in render method 

import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Count : 150,
         Value : 855
      }
    }
    
  render() {
    const {Count , Value} = this.state
    return (
      <div>
        <h1>Count = {Count} and Value = {Value}</h1>
      </div>
    )
  }
}

export default Welcome
