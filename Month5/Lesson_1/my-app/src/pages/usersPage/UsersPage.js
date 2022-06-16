import React from 'react';
import {useSelector} from "react-redux";

const UsersPage = () => {
    const users = useSelector(state => state.users)
    return (
        <ul>
            {
                users.length > 0
                    ?
                    users.map((user, key)=>  <li key={key}>{user}<button>delete</button></li>)
                    :
                    <li>пользователей нет</li>

            }
        </ul>
    );
};

export default UsersPage;