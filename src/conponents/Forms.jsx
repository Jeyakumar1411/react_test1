import React, { Component } from 'react'

export class Forms extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username : "",
         password : "",
         language : "html"
      }
    }

    usernameChange = event => {
        this.setState(
            {
                username: event.target.value
            },
            () => console.log(this.state.username)
        )
    }

    passwordChange = event => {
        this.setState(
            {
                password: event.target.value
            },
            () => console.log(this.state.password)
            )
    }

    languageChange = event =>{
        this.setState(
            {
                language: event.target.value
            },
            () => console.log(this.state.language)
            )
    }

    submitHandler = event =>{
        event.preventDefault()
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>

            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.usernameChange} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.passwordChange} />
            </div>

            <div>
                <select onChange={this.languageChange}>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javasript">JavaScript</option>
                </select>
            </div>

            <div>
                <input type="submit" />
            </div>

        </form>
      </div>
    )
  }
}

export default Forms