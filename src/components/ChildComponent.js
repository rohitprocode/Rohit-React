import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//       <button onClick={props.greetHandler} >Greet Click</button>
//     </div>
//   )
// }

function ChildComponent(props){
    return(
        <div>
            <button onClick={()=>props.greetHandler('Welcome to our show')} >Greet Click</button>
        </div>
    )
}

export default ChildComponent
