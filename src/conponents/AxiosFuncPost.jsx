import React, { useState } from 'react'
import axios from 'axios'

const AxiosFuncPost = () => {

  const [username, setUsername] = useState('')
  const [customer_name, setCustomer_name ] = useState('')
  const [age, setAge] = useState('')

  const submitHandler = event => {
    event.preventDefault()

    const data = {
      username : username,
      customer_name : customer_name,
      age : age
    }

    axios.post('http://127.0.0.1:8000/test/post', data)
        .then(response =>{
            setUsername('')
            setCustomer_name('')
            setAge('')
        })
        .catch(error => console.log(error))



  }

  return (
    <div>
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" value={username} onChange={event => setUsername(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="Customer_name">Customer Name:</label>
                    <input type="text" name="customer_name" id="customer_name" value={customer_name} onChange={event => setCustomer_name(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" value={age} onChange={event => setAge(event.target.value)} />
                </div>

                <div>
                    <input type="submit" />
                </div>

                </form>
      </div>
  )
}

export default AxiosFuncPost