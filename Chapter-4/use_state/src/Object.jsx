import React from 'react'
import { useState } from 'react'

function Object() {
    const obj = {
        name: "Rahul Sharma", 
        age: 23,
        city: "Jaipur",
        isIntern: true
    }
    let changeState = () => {
        setPerson(previousState => {
            return {
                ...previousState,
                city: "Ahmedabad"
            }
        })
    }

    const [person, setPerson] = useState(obj)
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.city}</h1>
      <h1>{person.isIntern.toString()}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  )
}

export default Object
