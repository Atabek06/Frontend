import React, {useState, useEffect} from "react";
import Users from "../../components/users/Users";
const  URL = 'https://jsonplaceholder.typicode.com/users';

function MainPage () {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    return(
        <div>
            <button onClick={getUsers}>get Users</button>
            <Users propUsers={users}/>
        </div>
    )
}

export default MainPage;