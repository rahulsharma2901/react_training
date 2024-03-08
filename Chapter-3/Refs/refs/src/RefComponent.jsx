import React, { Component } from 'react'
import { createRef } from 'react'

export default class RefComponent extends Component {
    constructor(props) {
        super(props)

        this.myRef = createRef();
    }

    componentDidMount() {
        console.log(this.myRef)
        console.log(this.myRef.current.innerHTML)
    }

    heading = () => {
        this.myRef.current.align = "right";
        this.myRef.current.style.color = "red";
        this.myRef.current.style.backgroundColor = "#89CFF0"
    }

    render() {
        return (
            <div>
                <h1 ref={this.myRef}>Welcome to React world!</h1>
                <button onClick={this.heading}>CLICK</button>
            </div>
        )
    }
}
