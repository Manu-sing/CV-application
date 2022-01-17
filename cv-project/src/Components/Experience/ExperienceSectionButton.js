import React, { Component } from 'react'

export default class ExperienceSectionButton extends Component {
 
    render() {
        return (
            <div>
               <button className="add-btn" style={{background: "none", border: "none", cursor: "pointer", fontSize:"20px"}} onClick={this.props.showExperienceForm}>{this.props.text}</button> 
            </div>
        )
    }
}