import React from "react";
import {News} from "../../components/news/News";


class MainPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({newsStatus: false});
        this.handleNews = this.handleNews.bind(this)
    }
    handleNews(){
        this.setState({newsStatus: !this.state.newsStatus})
    }
    render() {
        return(
            <>
                <h2>Main Page</h2>
                {this.state.newsStatus === true? <News/> : ""}
                <button onClick={this.handleNews}>News</button>
            </>
        )
    }
}



export default MainPage;