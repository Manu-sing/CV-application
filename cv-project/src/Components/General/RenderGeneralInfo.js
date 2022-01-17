import React, { Component } from 'react'
import "./RenderGeneralInfo.css"

export default class RenderGeneralInfo extends Component {
    render() {
        return (
            <div className="rendered-general">
                <p>{"Name: " + this.props.name}</p>
                <p>{"Email: " + this.props.email}</p>
                <p>{"Phone number: " + this.props.number}</p>
            </div>
        )
    }
}
