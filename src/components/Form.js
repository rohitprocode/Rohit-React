import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         comments : "",
         Topic : "react"
      }
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleCommentChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    handleSelectChange = (event) =>{
        this.setState({
            Topic : event.target.value
        })
    }

  render() {
    return (
        <form>
      <div>
        <label>Username</label>
        <input type="text" value={this.state.username}  onChange={this.handleUsernameChange} />
        </div>
        <div>
        <label>Comments</label>
        <input type="text" value={this.state.comments} onChange={this.handleCommentChange} />
      </div>
      <div>
        <label>Topic</label>
        <select value={this.state.Topic} onChange={this.handleSelectChange} > 
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="react">React</option>
        </select>
      </div>
      </form>
    )
  }
}

export default Form
