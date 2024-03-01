import React from 'react'
import { useState } from 'react'

function Array() {
    let num = [1, 2, 3, 4, 5, 6, 7, 8];
    let [numbers, setNumbers] = useState(num);

    // let changeList = () => {
    //     setNumbers([11,12,13,14,15,16,17,18]);
    // }

    let changeList = () => {
        setNumbers(previousState => {
            return [
                ...previousState,
                Math.floor(Math.random() * 50)
            ]
        });
    }
    return (
        <div>
            <ul>
                {numbers.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
            <button onClick={changeList}>Change Array</button>
        </div>
    )
}

export default Array
