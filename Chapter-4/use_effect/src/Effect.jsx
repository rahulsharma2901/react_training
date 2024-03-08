import React, { Component } from 'react'

export default class Effect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        console.log("Great! componentDidMount was called again in this code.")
    }
    componentDidUpdate() {
        console.log("Great! componentDidUpdate is called again in this code.")
    }
    updateCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.updateCount}>UPDATE</button>
      </div>
    )
  }
}
