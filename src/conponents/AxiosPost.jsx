import axios from 'axios'
import React, { Component } from 'react'

export class AxiosPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         customer_name: '',
         age:''
      }

    }

      inputHandler = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
      }

      submitHandler = event => {
        event.preventdefault()
        console.log(this.state)

        axios.post('http://127.0.0.1:8000/test/post', this.state)
        .then(response =>{
            console.log(response.data);
            this.setState({
                username: '',
                customer_name: '',
                age:''
            })
        })
        .catch(error => console.log(error))
    }

  render() {
    return (
      <div>
            <form onSubmit={this.submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.inputHandler} />
                </div>

                <div>
                    <label htmlFor="Customer_name">Customer Name:</label>
                    <input type="text" name="customer_name" id="customer_name" value={this.state.customer_name} onChange={this.inputHandler} />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" value={this.state.age} onChange={this.inputHandler} />
                </div>

                <div>
                    <input type="submit" />
                </div>

                </form>
      </div>
    )
  }
}

export default AxiosPost