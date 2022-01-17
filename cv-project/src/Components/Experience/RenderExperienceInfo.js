import React, { Component } from 'react'
import "./RenderExperienceInfo.css"

export default class RenderExperienceInfo extends Component {
    render() {
        return (
            <div className="rendered-experience">
                <p>{"Company: " + this.props.company}</p>
                <p>{"Position: " + this.props.position}</p>
                <p>{"Main tasks: " + this.props.mainTasks}</p>
                <p>{"Starting date: " + this.props.startingDate}</p>
                <p>{"Ending date: " + this.props.endingDate}</p>
            </div>
        )
    }
}