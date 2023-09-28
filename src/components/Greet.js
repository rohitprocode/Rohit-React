import React, { Children } from "react";

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

// const Greet = props => {
//     // props.name = "Rohit";   props are immutable cannot change its valuen
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// export default Greet;


//Destructuring - Functional Components

// const Greet = props =>{
//     return(
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//         </div>
//     )
// }

// //Destructure in function parameter
// const Greet = ({name,heroName})=>{
//     return(
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

//Destructure in function body
// const Greet = (props)=>{
//     const {name,heroName} = props
//     return(
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

// export default Greet