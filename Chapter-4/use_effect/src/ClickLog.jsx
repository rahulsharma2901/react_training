import React, { useEffect } from 'react'

function ClickLog() {
    useEffect(() => {
        const handle = () => {
            console.log("Button Clicked!");
        }
        document.addEventListener('click', handle);
        return () => {
            document.removeEventListener('click', handle);
        }
    })
    return (
        
        <button>CLICK TO CHECK!</button>
    )
}

export default ClickLog;