
import React, { Component } from 'react'
import "./RenderEducationInfo.css"

export default class RenderEducationInfo extends Component {
    render() {
        return (
            <div className="rendered-education">
                <div>
                <p>{"School/university: " + this.props.school}</p>
                </div>
                <div> 
                <p>{"Title: " + this.props.title}</p>
                </div>
                <div>
                <p>{"Graduation date: " + this.props.graduationDate}</p>
                </div>
            </div>
        )
    }
}