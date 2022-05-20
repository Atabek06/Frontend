import React from "react";
import {Services} from "../../components/services/Services";
import {Header} from "../../components/header/Header";

class BlogPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({menuStatus: false });
        this.handleMenu = this.handleMenu.bind(this)
    }
    services = ["ux/ui", "front-end", "back-end", "flutter", "sql", "python"]
    handleMenu () {
        this.setState({menuStatus: !this.state.menuStatus})
}
    render(){
        return(
            <>
                {/*<h1>state = {console.log(this.state.menuStatus)}</h1>*/}
                <h2>Title - {this.props.title}</h2>
                {this.state.menuStatus === true ? <Header/> : ""}
                {/*{this.state.menuStatus === true && <Header/>}*/} {/*2 способ*/}
                <Services services={this.services}/>
                <button onClick={this.handleMenu}>Menu</button>
            </>
        )
    }
}

export default BlogPage;