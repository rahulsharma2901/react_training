import React from 'react'
import { useState } from 'react'

function List() {
    const [items, setItems] = useState([])

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`
        setItems([...items, newItem])
    }

  return (
    <div>
      <ul>
        {items.map((item, index) => (
            <li key={index}> {item} </li>
        ))}
      </ul>
      <button onClick={addItem}>ADD NEW ITEM</button>
    </div>
  )
}

export default List
