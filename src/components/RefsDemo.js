// // import React, { Component } from 'react'

// // export default class RefsDemo extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.inputField = React.createRef()
// //   }

// //   componentDidMount(){
// //     this.inputField.current.focus()
// //   }
  
// //   render() {
// //     return (
// //       <form>
// //         Name: <input type="text"  ref={this.inputField}/>
// //         <br />
// //         <br />
// //         Password: <input type="text"  />
// //         <br />
// //         <br />
// //         Comments: <input type="text" />
// //       </form>
// //     )
// //   }
// // }

// import React, { Component } from 'react'

// export default class RefsDemo extends Component {
//   constructor(props) {
//     super(props)
//     this.inputField = React.createRef()
//     this.state={
//       value : ""
//     }
//   }

//   lookAtHere = (e)=>{
//     e.preventDefault();
//     this.setState({
//       value : this.inputField.current.value
//     })
//   }
  
//   render() {
//     return (
//       <>      
//       <h2>{this.state.value}</h2>
//     <form onSubmit={this.lookAtHere} >
//       <input type="text" ref={this.inputField} />
//       <button type='submit' >Submit</button>
//     </form>
//     </>

//     )
//   }
// }

// CallBack Ref 
import React, { Component } from 'react'

export default class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.CallbackRef = null;
    this.setCallbackRef = (element)=> {
      this.CallbackRef = element;
    }
  }
  componentDidMount(){
    if(this.CallbackRef){
      this.CallbackRef.focus()
    }
  }
  render() {
    return (
      <>
      <form>
        Name : <input type="text" />
        <br />
        <br />
        Password : <input type="text"  />
        <br />
        <br />
        Comments : <input type="text" ref={this.setCallbackRef}/>
      </form>
      </>
    )
  }
}

