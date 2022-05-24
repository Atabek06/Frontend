import React from "react";
import Users from "../../components/users/Users";

class MainPage extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                <div style={{marginBottom: "100px"}}>
                    <Users users={this.props.users}/>
                </div>
            </>
        )
    }
}

export default MainPage