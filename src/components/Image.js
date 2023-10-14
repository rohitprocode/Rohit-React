import React, { Component } from 'react'
import logo192 from './logo192.png'
import logo512 from './logo512.png'
import Image2 from './Image2'

class Image1 extends Component{
    render(){
        return(
            <>
            <Image2 Pic={logo192}/> <br />
            <Image2 Pic={logo512}/>
            </>
        )
    }
}

export default Image1