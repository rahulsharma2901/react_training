import React from "react";

class App extends React.Component {
  render() {
    return <h1>{this.props.data}</h1>
  }
}

class Props extends React.Component {
  constructor(props){
    super(props);
    this.state = { change: true }
  };
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({ change: !this.state.change })
        }}
        >
          CLICK HERE!
        </button>
        { this.state.change ? (
          <App data = "Hello, my friend!" />
        ) : (
          <App data = "Goodbye, my friend!" />
        )}       
      </div>
    )
  }
}
export default Props;