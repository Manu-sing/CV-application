import React, { Component } from 'react'
import "./ExperienceForm.css"

export default class ExperienceForm extends Component {
    render() {
        return(
            <form onSubmit={this.props.onExperienceFormSubmit} className={this.props.classExp ? "Experience-Form" : "Hidden"} noValidate>
                <div className="close" onClick={this.props.closeExperienceForm}>&times;</div>
                <div>
                <label>Company</label><br/>
                <input
                className="form-input" 
                type="text"
                name= "company"
                value={this.props.company}
                onChange={this.props.onExperienceFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.company}</div>
                </div>

                <div>
                <label>Position</label><br/>
                <input
                className="form-input"  
                type="text"
                name= "position"
                value={this.props.position}
                onChange={this.props.onExperienceFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.position}</div>
                </div>

                <div>
                <label>Main tasks</label><br/>
                <input
                className="form-input"  
                type="text"
                name= "mainTasks"
                value={this.props.mainTasks}
                onChange={this.props.onExperienceFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.mainTasks}</div>
                </div>

                <div>
                <label>Starting date</label><br/>
                <input 
                className="form-input" 
                type="date"
                name= "startingDate"
                value={this.props.startingDate}
                onChange={this.props.onExperienceFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.startingDate}</div>
                </div>

                <div>
                <label>Ending date</label><br/>
                <input 
                className="form-input" 
                type="date"
                name= "endingDate"
                value={this.props.endingDate}
                onChange={this.props.onExperienceFormChange}
                >
                </input>
                <div className="error-message" style={{color: "red"}}>{this.props.errors.endingDate}</div>
                </div>

                
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}