import React from 'react';

function UsersList({users, name}) {
    return (
        <ul>
            {
                users.length > 0
                 ?

                users.map((user, key)=> <li key={key}>{user}</li>)
                :
                <li>пользователей нет</li>

                }

        </ul>
    );
}


export default UsersList;