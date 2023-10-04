import React from 'react'
import './myStyle.css'

// function Stylesheet() {
//   return (
//     <div>
//       <h1 className='primary' >Stylesheet</h1>
//     </div>
//   )
// }

function Stylesheet(props){
    let className = props.primary ? "primary" : "Second-Primary"
    return (
        <div>
            <h1 className={className} >Stylesheet</h1>
        </div>
    )
}
export default Stylesheet
