import React, { Component } from 'react'
import "./EducationForm.css"

export default class EducationForm extends Component {
    render() {
        return(
            <form onSubmit={this.props.onEducationFormSubmit} className={this.props.classEdu ? "Education-Form" : "Hidden"} noValidate>
                <div className="close" onClick={this.props.closeEducationForm}>&times;</div>
                <div>
                <label>School/University</label><br/>
                <input
                className="form-input" 
                type="text"
                name= "school"
                value={this.props.school}
                onChange={this.props.onEducationFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.school}</div>
                </div>

                <div>
                <label>Title</label><br/>
                <input
                className="form-input" 
                type="text"
                name= "title"
                value={this.props.title}
                onChange={this.props.onEducationFormChange} 
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.title}</div>
                </div>

                <div>
                <label>Graduation date</label><br/>
                <input 
                className="form-input" 
                type="date"
                name= "graduationDate"
                value={this.props.graduationDate}
                onChange={this.props.onEducationFormChange} 
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.graduationDate}</div>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}