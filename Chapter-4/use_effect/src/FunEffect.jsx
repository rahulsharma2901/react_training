import React from 'react'
import { useEffect, useState } from 'react'

function FunEffect() {
    let [count, setCount] = useState(0)
    let [name, setName] = useState("Rahul")
    // useEffect(() => {
    //     console.log("Run the useEffect function!" + count)
    // }, [count, name])
    useEffect(() => {
        console.log("Number of times function is called: " + count)
    }, [count])
    useEffect(() => {
        console.log("Name of the person is: " + name)
    }, [name])
    return (
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={() => setCount(count + 1)}>Click to update</button>
            <button onClick={() => setName(name = "Sneha")}>Click to update</button>
        </div>
    )
}

export default FunEffect;
