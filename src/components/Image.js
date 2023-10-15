import React, { Component } from 'react'
import logo192 from './logo192.png'
import logo512 from './logo512.png'
import Image2 from './Image2'

class Image1 extends Component{
    render(){
        return(
            <div>
            <Image2 pic={logo192}/> <br />
            <Image2 pic={logo512}/> <br />
            <Image2 pic="NoImage"/>
            </div>
        )
    }
}

export default Image1