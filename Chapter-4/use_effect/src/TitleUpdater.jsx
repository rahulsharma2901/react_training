import React, { useEffect, useState } from 'react'

function TitleUpdater() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Increment/Decrement ${count}`
    }, [count])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click to Increment!</button>
      <button onClick={() => setCount(count - 1)}>Click to Decrement!</button>
    </div>
  )
}

export default TitleUpdater;