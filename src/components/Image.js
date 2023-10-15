import React, { Component } from 'react'
import logo192 from './logo192.png'
import logo512 from './logo512.png'
import Image2 from './Image2'
import ErrorBound from './ErrorBound'
class Image extends Component {
 
  render() {
    return (
      <div>
        <ErrorBound>
          <Image2 pic={logo192} />
        </ErrorBound>
        <ErrorBound>
          <Image2 pic={logo512} />
        </ErrorBound>
        <ErrorBound>
          <Image2 pic="No Image" />
        </ErrorBound>
      </div>
    )
  }
}

export default Image 