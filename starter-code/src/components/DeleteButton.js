import React, { Component } from 'react'

export default class DeleteButton extends Component {
    render() {
        
        return (
            <button onClick={this.props.delete} >
                Delete
            </button>
        )
    }
}
