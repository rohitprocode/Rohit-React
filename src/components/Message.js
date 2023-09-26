import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome to Rohitzzz"
        }
    }

    Changeh1(){
        this.setState({
            message : "Thankyou for Joining us"
        })
    }
    render(){
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.Changeh1()} >Join our Community</button>
        </div>
        )
    }
}

export default Message