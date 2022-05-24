import React from "react";


class InputPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = (
            {
                username: ""
            }
        )
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    onChangeInput (e){
        this.setState({...this.state,[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value}
                           onChange={this.onChangeInput}
                           name="username"
                    />
                    <button type="submit">отправить</button>
                </form>
            </div>
        )
    }
}

export default InputPage