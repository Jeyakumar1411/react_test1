import React from 'react'

const Render3 = ({age}) => {
  return (
    <div>
        <p>The Component Type is {age >= 25 ? <p>Good</p> : <p>Bad</p>}</p> {/* Ternary Operator */}
        <p>The Component Type is {age >= 25 && <p>Good</p>}</p> {/* Short Circuit*/}
    </div>
  )
}

export default Render3