import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        nbClick: 0
    }

    increment = () => {
        this.setState({
            nbClick: this.state.nbClick +1
        })
    }

    render() {
        return (
            <div className="counter">
                <button className="counter__btn" onClick={this.increment}>{this.props.text_btn} a été cliqué {this.state.nbClick} fois</button>
            </div>
        );
    }
}
