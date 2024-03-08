import React from 'react'
import { useState } from 'react'

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    }
    return (
        <div>
            <p>Toggle is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={handleToggle}>
                {isOn ? 'Turn toggle OFF' : 'Turn toggle ON'}
            </button>
        </div>
    )
}

export default ToggleButton
