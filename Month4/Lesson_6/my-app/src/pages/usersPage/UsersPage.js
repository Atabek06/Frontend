import React, {useState} from "react";
import Users from "../../components/users/Users";
const  URL = 'https://jsonplaceholder.typicode.com/users';

function UsersPage (){

    const [users, setUsers] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: ""
    })

    const getUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    const onChangeData = (e) => {
        setData({...data,[e.target.name]: e.target.value})
    }

    const createUser = () => {
        const options = {
            method: "POST",
            headers:{
                "Contetnt-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(URL, options).then(response => console.log(response))
    }
    return(
        <div>
            <input type="text" name="name" value={data.name} onChange={onChangeData}/>
            <input type="email" name="email" value={data.email} onChange={onChangeData}/>
            Users list
            <button onClick={createUser}>create users</button>
            <Users propUsers={users} />
        </div>
    )
}

export default UsersPage;