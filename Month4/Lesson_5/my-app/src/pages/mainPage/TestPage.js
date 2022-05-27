import React from "react";


class TestPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({title: "old Title"})
        this.changeTitle = this.changeTitle.bind(this)
    }
    changeTitle(e){
        e.preventDefault()
        this.setState({title: "new Title"})
    }
    render() {
        return(
            <div>
                Test Page - {this.state.title}
                <button onClick={this.changeTitle}>change Title</button>
            </div>
        )
    }
}

export default TestPage;