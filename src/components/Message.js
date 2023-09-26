import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }
    render(){
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.ontextChange()} >Subscribe</button>
        </div>
        )
    }  
    ontextChange(){
        this.setState({
            message : "Thankyou for Subscribing"
        })
    }
}  

export default Message