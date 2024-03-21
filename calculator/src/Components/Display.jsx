import React, { useEffect, useRef } from 'react'
import './Display.css'

function Display(props) {
  const resultRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history])

  useEffect(() => {
    inputRef.current.scrollLeft = inputRef.current.scrollWidth;
  }, [props.expression])
  return (
    <div className='display custom_scroll'>
        <div className="display_history">
          {
            props.history && props.history?.map((item) => (
              <p key={item + "" + Math.random()}>{item}</p>
            ))
          }
        </div>
        <div ref={inputRef} className="display_expression custom_scroll">
          <p>{props.expression}</p>
        </div>
        <p className="display_result" ref={resultRef}>{props.result}</p>
    </div>
  )
}

export default Display
