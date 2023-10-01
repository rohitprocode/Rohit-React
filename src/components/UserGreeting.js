import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return <div>Login Vishwas</div>
        } else{
            return <div>Login Guest</div>
        }
        // return (
        //     <div>
        //         <div> Login Vishwas </div>
        //         <div> Login Guest </div>
        //     </div>
        // )
    }
}

export default UserGreeting
