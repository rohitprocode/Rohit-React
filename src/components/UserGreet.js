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
// class UserGreet extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             isLoggedIn: false
//         }
//     }

//     render() {
//         let Message;
//         if (this.state.isLoggedIn) {
//             Message = <div>Hello Rohit</div>
//         } else {
//             Message = <div>Hello Guest</div>
//         }

//         return <div>{Message}</div>
//     }
// }

// Conditional Rendering : Use of Ternary Operator
// Benefit : It can be used in JSX

//     class UserGreet extends Component {
//         constructor(props) {
//             super(props)

//             this.state = {
//                 isLoggedIn: true
//             }
//         }

//         render() {
//             return (
//                 this.state.isLoggedIn ?
//                 <div>Hello Rohit</div> :
//                 <div>Hello Guest</div>
//             )
//     }
// }

//Conditional Rendering : Use of short-circuit operator
//If right hand side condition is true than another code is executed otherwise , nothing will executed

class UserGreet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        return this.state.isLoggedIn && <div>Hello Rohit</div>
    }
}

export default UserGreet
