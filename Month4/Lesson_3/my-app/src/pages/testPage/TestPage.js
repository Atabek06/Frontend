import React from "react";




class TestPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }
    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick()
        })
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default TestPage