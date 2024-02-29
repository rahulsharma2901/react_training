import React from 'react'
import Person from './Person';

function Student() {
    // const students = ["Parker", "Elijah", "Theon", "Ester", "Rachel"];
    // let studentNames = students.map((st, index) => <li key = {index}>{ st }</li>)
    console.log("Names with keys are generated")

    // const numbers = [1,2,3,4,5,6,7,8]
    // const result = numbers.map(num => <h4>{ num = num * 2 }</h4>)
    const person = [
        {
            id: 1,
            name: "Connors",
            age: 20
        },
        {
            id: 2,
            name: "Ursula",
            age: 21
        },
        {
            id: 3,
            name: "Rhett",
            age: 19
        },
        {
            id: 4,
            name: "Tyler",
            age: 22
        }
    ]
  return (
    <div>
      {/* <h3><ol>{ studentNames }</ol></h3> */}
      {/* <hr />
      { numbers.map(num => <h4>{ num }</h4>) }
      <hr /><h3>The numbers after multiplying with 3 are:</h3>
      { numbers.map(num => <h4>{ num = num * 3 }</h4>) }
  <hr />{ result */}
      <hr />{ person.map( per => <Person key={per.id} pers = {per}/>)}
      <h3>And we all are friends!</h3>
    </div>
  )
}

export default Student
