import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosFunc = () => {

    const [customer_data, setCustomer_data] = useState([])

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/test/post')
        .then(response => setCustomer_data(response.data))
        .then(response => console.log(response.data))
        
        .catch(error => console.log(error))
    }, [])
    
    
    
    let render_data = customer_data.length > 0 ? customer_data.map(customer =>
        {
            return (
                <tr key={customer.id}>
                    <td>{customer.username}</td>
                    <td>{customer.customer_name}</td>
                    <td>{customer.age}</td>
                </tr>
            )
            
        }) : <div><tr>No Data Found</tr></div>
        
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
  export default AxiosFunc