import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, handleName, clearUsers} from "../../store/usersSlice";
import UsersList from "../../components/usersList/UsersList";

function UsersPage() {
    const dispatch = useDispatch();
    const name = useSelector(state => state.usersReducer.name);
    const users = useSelector(state => state.usersReducer.users);

    const handleNameFunc = (e) => {
        dispatch(handleName(e.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(name))
    }
    const clearUsersFunc = () => {
        dispatch(clearUsers(name))
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleNameFunc} value={name}/>
                <button onClick={addUserFunc}>create user</button>
                <button onClick={clearUsersFunc}>delete users</button>
            </div>
            <UsersList users={users} name={name}/>
        </div>


    );
}

export default UsersPage;