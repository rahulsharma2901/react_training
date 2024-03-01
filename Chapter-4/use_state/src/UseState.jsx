import React from 'react'
import { useState } from 'react'

function UseState() {
  const [name, setName] = useState("Rahul Sharma");
  let stateChange = () => {
    setName("Shrey Sharma");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={stateChange}>Update</button>
    </div>
  )
}

export default UseState
