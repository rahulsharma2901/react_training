import React, { Component } from 'react'

export default class CallbackRef extends Component {
    constructor(props) {
      super(props)
    
      this.myRef = null;
      this.setMyRef = (element) => {
        this.myRef = element;
      }
    }

    componentDidMount() {
        console.log(this.myRef);
        this.myRef.focus();
        this.myRef.style.color = "Blue"
    }
    
  render() {
    return (
      <div>
        <label htmlFor="">Enter Name: </label>
        <input type="text" ref={this.setMyRef} placeholder='Enter Your name' />
        <br /><input type="submit" value="Submit" />
      </div>
    )
  }
}
