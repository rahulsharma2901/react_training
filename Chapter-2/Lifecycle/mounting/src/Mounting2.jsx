import React, { Component } from 'react'

export default class Mounting2 extends Component {
    //constructor method
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Rahul Sharma"
      }
      console.log("Mounting2: Constructor invoked");
    }
    //static getDerivedStateFromProps method
    static getDerivedStateFromProps(props, state) {
        console.log("Mounting2: This function is invoked");
        console.log(state);
        console.log(props);
        return null
    }
    componentDidMount() {
        console.log("Mounting2: The componentDidMount function is invoked");
    }
  render() {
    console.log("Mounting2: Prop invoked")
    return (
      <div>
        <h1>{this.props.city}</h1>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
