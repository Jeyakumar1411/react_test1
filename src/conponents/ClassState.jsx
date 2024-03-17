import React, { Component } from 'react'

export class ClassState extends Component {

    constructor() {
      super()
    
      this.state = {
         name : "BatMan",
         count : 0
      }
    }

    changeName() {
        this.setState(
            {
                name : "Bruce"
            }
        )
    }

    // Increment(){
    //   this.setState(
    //     {
    //     count: this.state.count + 1
    //   },
    //   () => (console.log(this.state.count)) // callback function
    //   )
    // }

    // Decrement(){
    //   this.setState(
    //     {
    //     count: this.state.count - 1
    //   },
    //   () => (console.log(this.state.count)) // callback function
    //   )
    // }


    //Previous State:-
    Increment(){
      this.setState((previousState) => ({
        count: previousState.count + 1
      }))
    }

    Decrement(){
      this.setState((previousState) => ({
        count: previousState.count - 1
      }))
    }
  
  

  render() {
    return (
      <div>
        <h1>I am {this.state.name}</h1>
        <button onClick={() => this.changeName()}>Change Name</button>
        <p>Count { this.state.count}</p>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Decrement</button>
      </div>
    )
  }
}

export default ClassState