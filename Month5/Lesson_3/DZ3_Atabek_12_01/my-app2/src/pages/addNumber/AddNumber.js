import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumberAction, createNumberAction, clearInputNumberAction } from '../../redux/actions/actions';
import ShowNumber from '../showNumber/ShowNumber';

class AddNumber extends Component {
    constructor() {
        super();
        this.addNumberFunc = this.addNumberFunc.bind(this)
        this.changeInputNumber = this.changeInputNumber.bind(this)
    }

    addNumberFunc() {
        this.props.createNumberAction(this.props.number)
    }

    changeInputNumber(e) {
        this.props.addNumberAction(e.target.value)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.changeInputNumber}
                    value={this.props.number}
                />
                <button onClick={this.addNumberFunc}>add number</button>
                <ShowNumber propsNumber={this.props.numbers} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.numbers.number,
        numbers: state.numbers.numbers
    }
}

const mapDispatchToProps = {
    createNumberAction,
    addNumberAction,
    clearInputNumberAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);