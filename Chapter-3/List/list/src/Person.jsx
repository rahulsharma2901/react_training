import React from 'react'

function Person({pers}) {
  return (
    <div>
      <h3>Hi, my name is {pers.name} and I am {pers.age} years old!</h3> 
    </div>
  )
}

export default Person
