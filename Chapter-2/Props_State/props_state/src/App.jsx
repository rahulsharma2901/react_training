// import React from 'react'
import React, { Component } from 'react';

// function App({name, age}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }
// function App(props) {
//   const {name, age} = props;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rahul Sharma",
      age: 23,
      city: "Jaipur"
    }
  }
  render() {
    const { name, age, city } = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{city}</h1>
      </div>
    )
  };
}


export default App