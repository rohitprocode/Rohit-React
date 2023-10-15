import React, { Component } from 'react'
import logo192 from './logo192.png'
import logo512 from './logo512.png'
import Image2 from './Image2'

class Image extends Component {
  render() {
    return (
      <div>
        <Image2 pic={logo192}/>
        <Image2 pic={logo512}/>
        <Image2 pic="No Image"/>
      </div>
    )
  }
}

export default Image 