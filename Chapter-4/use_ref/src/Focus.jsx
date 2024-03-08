import React from 'react'
import { useRef, useEffect } from 'react';

function Focus() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleButton = () => {
        console.log("Full Name:",inputRef.current.value);
    }
  return (
    <div>
      <label>Full Name: <input type="text" ref={inputRef} placeholder='Enter Name Here'/>
      <br /><hr /></label>
      <button onClick={handleButton}>CLICK TO UPDATE</button>
    </div>
  )
}

export default Focus
