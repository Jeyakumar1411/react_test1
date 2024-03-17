import React from 'react'

const PropsFunction2 = (props) => {
    const {name, age} = props
  return (
    <div>
        {name}
        <br />
        {age}
    </div>
  )
}

export default PropsFunction2