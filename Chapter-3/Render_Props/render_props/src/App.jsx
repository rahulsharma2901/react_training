import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <RenderPropsParent />
      </div>
    )
  }
}

class RenderPropsChild extends Component {
  render() {
    return (
      <div>
        <h1>Hi! My name is...<br />What? My name is...<br />Who? My name is...</h1>
        {this.props.render()}
      </div>
    )
  }
}

class RenderPropsParent extends Component {
  render() {
    return (
      <RenderPropsChild
        render={() => {
          return (
            <div><h2>*Chika Chika* Slim Shady</h2></div>
          )
        }}
      />
    )
  }
}

export default App;