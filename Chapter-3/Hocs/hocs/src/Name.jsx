import React, { Component } from 'react'

const EnhancedComponent = (OriginalComponent) => {
  class Name extends Component {
    render() {
      return (
        <OriginalComponent name = "This is my example of Higher Order Component. Deal with it!" />
      )
    }
  }
  return Name;
}

export default EnhancedComponent;