import React, { Component } from 'react'

export default class SectionTitle extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
              <h3 className="section-title">{this.props.title}</h3>  
            </div>
        )
    }
}
