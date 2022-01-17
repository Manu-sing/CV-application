import React, { Component } from 'react'
import "./Header.css"

class Header extends Component {

    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className="Header">
               <h1 className="Title">{this.props.title}</h1> 
            </div>
        )
    }
}

export default Header;
