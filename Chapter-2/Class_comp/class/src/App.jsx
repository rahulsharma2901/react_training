import React, { Component } from "react";

class App extends Component {
  state = {
    num: 1,
    name: "Rahul Sharma",
    age: 23
  }

  changeName() {
    this.setState({
      num: this.state.num + 1,
      name: "Megha Sharma",
      age: 30
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.num}</h1>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button type="button" onClick={() => this.changeName()}>CLICK HERE</button>
      </div>
    )
  }
}

export default App;