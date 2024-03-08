import React, { useEffect, useState } from 'react'

function Example() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Error has been occured!", error);
            }
        }
        fetchData();
    }, [])
  return (
    <div>
      <h1>This is the list of all the items</h1>
      { data ? (
        <ul>{data.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}</ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Example