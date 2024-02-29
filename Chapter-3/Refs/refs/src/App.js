import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
  
    this.state = {
       sayings: ""
    }
  }
  update() {
    this.setState({ sayings: this.a.value})
  }
  
  render() {
    return (
      <div>
        Sharad says <input type='text' ref="anything" onChange={this.update.bind(this)} />
        <br />
        <em>{this.state.sayings}</em>
      </div>
    )
  }
}
export default App;