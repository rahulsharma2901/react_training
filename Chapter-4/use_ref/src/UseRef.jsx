import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

function UseRef() {
    // const newRef = useRef();
    const firstRef = useRef();
    const lastRef = useRef()

    useEffect(() => {
        console.log(firstRef);
        console.log(lastRef);
        firstRef.current.focus()
        
        // console.log(newRef.current.innerHTML);
    })

    // const heading = () => {
    //     newRef.current.style.color = "Brown";
    //     newRef.current.style.backgroundColor = "Blue";
    //     newRef.current.style.fontFamily = "cooper";
    // }

    const submit = (e) => {
        e.preventDefault();
        console.log("Full Name: ", firstRef.current.value, lastRef.current.value)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="">Enter First name: </label>
                <input type="text" ref={firstRef} placeholder='First Name' />
                <br /><br />
                <label htmlFor="">Enter Last name: </label>
                <input type="text" ref={lastRef} placeholder='Last Name' />
                <br /><br /><input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default UseRef;