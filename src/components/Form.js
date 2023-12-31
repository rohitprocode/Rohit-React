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

    handleSubmit = event =>{
        alert(`${this.state.username} , ${this.state.comments} , ${this.state.Topic}`)
        event.preventDefault();
    }

  render() {
    const {username, comments, Topic} = this.state
    return (
        <form onSubmit={this.handleSubmit} >
      <div>
        <label>Username</label>
        <input type="text" value={username}  onChange={this.handleUsernameChange} />
        </div>
        <div>
        <label>Comments</label>
        <input type="text" value={comments} onChange={this.handleCommentChange} />
      </div>
      <div>
        <label>Topic</label>
        <select value={Topic} onChange={this.handleSelectChange} > 
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
            <option value="react">React</option>
        </select>
      </div>
      <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default Form
