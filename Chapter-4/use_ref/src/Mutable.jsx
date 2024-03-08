import React, { useRef, useState } from 'react'

function Mutable() {
    const mutableValue = useRef('updated for 0 times');
    const [count, setCount] = useState(0);

    const handleUpdate = () => {
        mutableValue.current = `updated for ${count + 1} times`;
        setCount((prevCount) => prevCount + 1);
        console.log(`Value updated for ${mutableValue.current}`)
    }

  return (
    <div>
        <h1>Mutable Value is {mutableValue.current}</h1>
        <button onClick={handleUpdate}>UPDATE VALUE</button>
    </div>
  );
}

export default Mutable;