import React, { useState } from 'react'

function Form() {
    const [input, setInput] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted: ${input}`)
        alert(`Submit name ${input}?`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter name: </label>
                <input type="text" value={input} onChange={handleInput} placeholder='Enter Name Here'/><br />
            <br /><br />
            <button type='Submit'>SUBMIT</button>
        </form>
    )
}

export default Form
