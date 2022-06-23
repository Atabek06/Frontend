import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    changeInputAction,
    createNumberAction,
    clearDataAction
} from '../../redux/actions/actions';
import ShowNumber from '../showNumber/ShowNumber';

class AddNumber extends Component {
    constructor() {
        super();
        this.changeInputFunc = this.changeInputFunc.bind(this)
        this.addNumberFunc = this.addNumberFunc.bind(this)
    }

    changeInputFunc(e) {
        const data = {
            value: e.target.value,
            name: e.target.name
        }
        this.props.changeInputAction(data)
    }

    addNumberFunc() {
        this.props.createNumberAction(this.props.data.name)

        const data = { name: 'name' }
          this.props.clearDataAction(data)

    }


    render() {
        return (
            <div>
                {console.log(this.props.numbers)}
                <input
                    type="number"
                    name='name'
                    onChange={this.changeInputFunc}
                    value={this.props.data.name}
                />
                <button onClick={this.addNumberFunc}>add number</button>

                <ShowNumber/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.input.data,
        numbers: state.numbers.numbers
    }
}

const mapDispatchToProps = {
    changeInputAction,
    createNumberAction,
    clearDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNumber);
