import React, { Component } from "react";


//Conditional Rendering : Use of IF/ELSE
// class UserGreet extends Component{
//     constructor(props) {
//       super(props)

//       this.state = {
//          isLoggedIn : true
//       }
//     }

//     render(){
//         if(this.state.isLoggedIn){
//             return <div>Hello Rohit</div>
//         }else{
//             return <div>Hello Guest</div>
//         }
//     }
// }

//Conditional Rendering : Use of Variable
class UserGreet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let Message;
        if (this.state.isLoggedIn) {
            Message = <div>Hello Rohit</div>
        } else {
            Message = <div>Hello Guest</div>
        }

        return <div>{Message}</div>
    }
}
export default UserGreet
