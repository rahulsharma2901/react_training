import React from 'react'
import { useState } from 'react'

function Functional() {
    let [count, setCount] = useState(0)

    let Increment = () => {
        setCount(count + 1);
    }
    let Decrement = () => {
        setCount(count - 1);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Incrementer</button>
        <button onClick={Decrement}>Decrementer</button>
    </div>
  )
}

export default Functional
