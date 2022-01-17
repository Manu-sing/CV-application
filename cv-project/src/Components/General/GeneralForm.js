import React, { Component } from 'react'
import "./GeneralForm.css"

export default class GeneralForm extends Component {


    render() {
        return (
            <form onSubmit={this.props.onSubmit} className={this.props.class ? "General-Form" : "Hidden"} noValidate>
            <div className="close" onClick={this.props.closeGeneralForm}>&times;</div>
            <div>
               <label>Name</label><br/>
               <input
               className="form-input" 
               type="text"
               name= "name" 
               value={this.props.name} 
               onChange={this.props.onChange}
               >
               </input>
               <div className="error-message" style={{color: "red"}}>{this.props.errors.name}</div>
            </div>
            <div>
               <label>Email</label><br/>
               <input
               className="form-input"  
               type="text"
               name= "email" 
               value={this.props.email} 
               onChange={this.props.onChange}
               >
               </input>
               <div className="error-message" style={{color: "red"}}>{this.props.errors.email}</div>
            </div>
            <div>
               <label>Phone number</label><br/>
               <input 
               className="form-input" 
               type="text"
               name= "number" 
               value={this.props.number} 
               onChange={this.props.onChange}
               >
               </input>
               <div className="error-message" style={{color: "red"}}>{this.props.errors.number}</div>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
            </form>
        )
    }
}
