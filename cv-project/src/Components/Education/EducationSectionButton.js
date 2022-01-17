import React, { Component } from 'react'

export default class EducationSectionButton extends Component {
 
    render() {
        return (
            <div>
               <button className="add-btn"  style={{background: "none", border: "none", cursor: "pointer", fontSize:"20px"}} onClick={this.props.showEducationForm}>{this.props.text}</button> 
            </div>
        )
    }
}