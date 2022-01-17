import React, { Component } from 'react'

export default class GeneralSectionButton extends Component {
 
    render() {
        return (
            <div>
               <button className="add-btn" onClick={this.props.showGeneralForm} style={{background: "none", border: "none", cursor:"pointer", fontSize:"20px"}} >{this.props.text}</button> 
            </div>
        )
    }
}
