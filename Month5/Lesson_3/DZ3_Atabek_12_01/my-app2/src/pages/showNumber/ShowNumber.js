import React, { Component } from 'react';

class ShowNumber extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.numbers.map((num, i) => <li key={i}> {num} </li>)}
            </ul>
        );
    }
}

export default ShowNumber;