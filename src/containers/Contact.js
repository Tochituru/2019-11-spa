import React, { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <div>
            <h1>Contact page</h1>
            <button onClick={ ()=> this.props.history.goBack()}>Back</button>
            </div>
        )
    }
}

export default Contact