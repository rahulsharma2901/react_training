import React, { useCallback, useState } from 'react'

function CounterButton({ onClick, label }) {
    console.log(`Rendering ${label} Button`)
    return <button onClick={onClick}>{label}</button>
}

function Parent() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <CounterButton onClick={increment} label="Increment" />
        </div>
    )
}

export default Parent;
