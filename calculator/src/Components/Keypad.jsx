import React from 'react'
import './Keypad.css'

function Keypad(props) {
  const delKeys = [
    {
      keyCode: 67,
      label: "C",
      value: "Clear"
    },
    {
      keyCode: 8,
      label: "⌫",
      value: "backspace",
    },
  ]
  const numKeys = [
    {
      keyCode: 55,
      label: "7",
    },
    {
      keyCode: 56,
      label: "8",
    },
    {
      keyCode: 57,
      label: "9",
    },
    {
      keyCode: 52,
      label: "4",
    },
    {
      keyCode: 53,
      label: "5",
    },
    {
      keyCode: 54,
      label: "6",
    },
    {
      keyCode: 49,
      label: "1",
    },
    {
      keyCode: 50,
      label: "2",
    },
    {
      keyCode: 51,
      label: "3",
    },
    {
      keyCode: 190,
      label: ".",
    },
    {
      keyCode: 48,
      label: "0",
    },
    {
      keyCode: 13,
      label: "=",
      value: "=",
    },
  ]
  const symKeys = [
    {
      keyCode: 53,
      label: "%",
      value: "%",
    },
    {
      keyCode: 187,
      label: "+",
      value: "+"
    },
    {
      keyCode: 189,
      label: "-",
      value: "-",
    },
    {
      keyCode: 56,
      label: "*",
      value: "*"
    },
    {
      keyCode: 191,
      label: "/",
      value: "/",
    },
  ]
  return (
    <div className='keypad'>
      <div className='keypad_delKeys'>
        {
          delKeys.map((item, index) => <p onClick={() => props.keyPress(item.keyCode, item.label, item.value)} key={index}>{item.label}</p>)
        }
      </div>
      <div className="keypad_numKeys">
        {
          numKeys.map((item, index) => <p onClick={() => props.keyPress(item.keyCode, item.label, item.value)} key={index}>{item.label}</p>)
        }
      </div>
      <div className="keypad_symKeys">
        {
          symKeys.map((item, index) => <p onClick={() => props.keyPress(item.keyCode, item.label, item.value)} key={index}>{item.label}</p>)
        }
      </div>
    </div>
  )
}

export default Keypad;