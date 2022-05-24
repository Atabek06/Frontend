import React from "react";

class ContactsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = (
            {
            login: "",
            age:0
        }
        )
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
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
                           name="login"
                    />
                    <input type="number" value={this.state.value}
                           onChange={this.onChangeInput}
                           name = "age"
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        )
    }
}

export default ContactsPage