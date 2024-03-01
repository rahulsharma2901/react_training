import React, { Component } from 'react'
import EnhancedComponent from './HigherOrder'

class App extends Component {
  render() {
    const { show, handleclick } = this.props
    return (
      <div>
        <h1>{show}</h1>
        <button onClick={handleclick}>Click</button>
      </div>
    )
  }
}

export default EnhancedComponent(App);