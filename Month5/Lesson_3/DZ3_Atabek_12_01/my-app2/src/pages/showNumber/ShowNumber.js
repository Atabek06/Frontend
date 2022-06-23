import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShowNumber extends Component {

    render() {
        return (
            <ul>
                {this.props.numbers.map((num, i) => <li key={i}> {num} </li>)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers.numbers
    }
}

export default connect(mapStateToProps, null)(ShowNumber);