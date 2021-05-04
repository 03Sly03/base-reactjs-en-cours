import React, { Component } from 'react';

export default class Person extends Component {

    state = {
        addText: ""
    }
    
    increment = () => {
        this.setState({
            addText: "et j'aime la politique"
        })
    }

    render() {
        return (
            <div className="person" onClick={this.increment}>
                <p className="person__presentation">je suis {this.props.personName} {this.state.addText}</p>
            </div>
        );
    }
}

