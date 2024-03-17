import React, { Component } from 'react'
import FirstComponent from './FirstComponent'

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <FirstComponent />
        <FirstComponent />
      </div>
    )
  }
}

// class coponent Snipets: "rce"

export default ClassComponent