import React, { Component } from 'react'


const EnhancedComponent = (OriginalComponent) => {
    class HigherOrder extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        handleClick = () => {
            this.setState({ count: this.state.count + 1 });
        }

        render() {
            return <OriginalComponent handleclick={this.handleClick} show={this.state.count} />
        }
    }
    return HigherOrder;

}

export default EnhancedComponent