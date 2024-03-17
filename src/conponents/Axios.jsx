import React, { Component } from 'react'
import axios from 'axios'

class Axios extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         customer_data: []
      }
    }

    componentDidMount(){  //life cycle hooks method

        axios.get('http://127.0.0.1:8000/test/post')
        .then(response => {

            this.setState({
                customer_data: response.data
            },

            ()=> console.log(this.state.customer_data))

        })

        .catch(error => console.log(error))

    }
  render() {
    const {customer_data} = this.state

    let render_data = customer_data.length > 0 ? customer_data.map(customer =>
        {
            return (
                <tr key={customer.id}>
                    <td>Customer's Username : {customer.username}</td>
                    <td>Customer's Name : {customer.customer.name}</td>
                    <td>Customer's Age : {customer.age}</td>
                </tr>
            )

        }) : <div><h1>No Data Found</h1></div>

    return (
      <div>
        <table>
            <thead>
                <td>Username</td>
                <td>Customer Name</td>
                <td>Customer Age</td>
            </thead>
            <tbody>
            {render_data}
            </tbody>
        </table>
           
      </div>
    )
  }
}

export default Axios