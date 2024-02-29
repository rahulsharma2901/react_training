import './App.css';


import React from 'react'
import './App.css';

function ClickFunction(props) {
    const HelloFunction = (name) => {
        alert("Hello, " + name);
    }
  return (
    <div className='App'>
        <input type="button" value="CLICK!" onClick={ () => HelloFunction(props.name) } />
    </div>
  )
}

export default ClickFunction;