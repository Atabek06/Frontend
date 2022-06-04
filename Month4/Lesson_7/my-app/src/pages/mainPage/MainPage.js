import React from "react";
import {useNavigate} from "react-router-dom";

const  url = "https://jsonplaceholder.typicode.com/users";

function MainPage () {
    const navigate = useNavigate();

    const  getUsers = () => {
        fetch(url).then(response => {
            if (response.ok) {
                navigate('.portfolio', {replace:true})
            }
        })
    }
    return(
        <>
            <h1>MainPage</h1>

            <button onClick={getUsers}>get users</button>
        </>
    )
}

export default MainPage