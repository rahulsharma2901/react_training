import React, { Component } from 'react'

export default class ChildClass extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount function called!");
    }
  render() {
    return (
      <div>
        <h1>Hey! Welcome, my Friend</h1>
      </div>
    )
  }
}
