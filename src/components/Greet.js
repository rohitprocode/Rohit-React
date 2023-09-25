import React from "react";

// function Greet(){
//     return <h1>Hello Rohit</h1>
// }

//Arrow function
// export const Greet = () => <h1>Hello Rohit</h1>

//With Example of JSX
// function Greet(){
//     return <h1>Hello Rohit</h1>
// }

//Example of Without using JSX
// const Greet = () =>{
//     return React.createElement('div',null,
//     React.createElement('h1',null,"Hello Rohit")
//     )
// }

//use of Props
const Greet = (props) =>{
    return <h1>Hello {props.name}</h1>
}

export default Greet
