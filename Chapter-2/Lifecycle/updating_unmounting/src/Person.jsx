import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Satya Prakash Sharma"
      }
      console.log("Constructor called!")
    }
    
    changeState = () => {
        this.setState({
            name: "SNEHA SHARMA"
        })
        console.log("Button Clicked!")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps function called!")
        console.log(props)
        console.log(state)
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate function called!")
        console.log(nextProps);
        console.log(nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate is called!")
        console.log(prevProps)
        console.log(prevState)
        return "Hello there!"
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate is called!")
        console.log(prevProps)
        console.log(prevState)
        console.log(snapshot)
    }

  render() {
    console.log("Render Called!")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <button onClick={this.changeState}>Change State</button>
      </div>
    )
  }
}
