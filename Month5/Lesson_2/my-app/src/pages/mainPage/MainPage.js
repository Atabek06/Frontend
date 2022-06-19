import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNameAction, createUserAction} from "../../actions/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const users = useSelector( state => state.users.users)
    const name = useSelector(state => state.users.name)
    const createUser = () => {
        dispatch(createUserAction(name))
    }
    const changeInput = (e) => {
        dispatch(addNameAction(e.target.value))
    }

    return (
        <div>
            main page
            <div>
                <input onChange={changeInput} value={name} type="number"/>
                <button onClick={createUser}>create user</button>
            </div>

            <ul>
                <li>users:</li>
                {users.map((user, key)=> <li key={key}>{user}</li>)}
            </ul>
        </div>
    );
};

export default MainPage;