import React from "react";
import Users from "../components/users/Users";
class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div>
                    <Users users={this.props.users}/>
                </div>
            </>
        )
    }
}

export default MainPage