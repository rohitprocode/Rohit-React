// import React, {Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

// export default Welcome

//Destructuring in render method

import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    const {name,heroName} = this.props
    return (
      <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
      </div>
    )
  }
}

export default Welcome
