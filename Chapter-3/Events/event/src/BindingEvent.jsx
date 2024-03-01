import React, { Component } from 'react'

class BindingEvent extends Component {
    constructor() {
      super()
        this.Binding = this.Binding.bind(this);
      this.state = {
         name: "Rahul Sharma"
      }
    }

    Binding() {
        this.setState({
            name: "Sakshi Sharma"
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button type='button' onClick={this.Binding}>Click to Change</button>
            </div>
        )
    }
}
export default BindingEvent;