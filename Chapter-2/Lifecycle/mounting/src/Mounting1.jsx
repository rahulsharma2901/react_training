import React, { Component } from 'react'
import Mounting2 from './Mounting2';


export default class Mounting1 extends Component {
    //constructor method
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Sakshi Sharma",
         age: 34
      }
      console.log("Mounting1: Constructor invoked");
    }
    //static getDerivedStateFromProps method
    static getDerivedStateFromProps(props, state) {
        console.log("Mounting1: This function is invoked");
        console.log(state);

        console.log(props);
        return null
    }
    componentDidMount() {
        console.log("Mounting1: The componentDidMount function is invoked");
    }
  render() {
    console.log("Mounting1: Prop invoked")
    return (
      <div>
        <h1>City: {this.props.city}</h1>
        <h1>Name: {this.state.name}, age: {this.state.age}</h1>
        <Mounting2 city = "Mumbai"/>
      </div>
    )
  }
}