import React,{Component} from "react";

class UserGreet extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }

    render(){
        if(this.state.isLoggedIn){
            return <div>Hello Rohit</div>
        }else{
            return <div>Hello Guest</div>
        }
    }
}

export default UserGreet
