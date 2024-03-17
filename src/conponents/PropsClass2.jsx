import React, { Component } from 'react'

class PropsClass2 extends Component {
    render() {

      const {name, age} = this.props

    return (
      <div>
        {name}
        <br />
        {age}
      </div>
    )
  }
}

export default PropsClass2