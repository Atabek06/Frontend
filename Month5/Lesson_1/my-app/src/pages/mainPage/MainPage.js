import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const title = useSelector(state => state.title);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: ""
    });

    const onChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const addUser = () => {
        dispatch({type: "ADD_USER", payload: user.name})
    }
    return (
        <div>
            MainPage - {title}
            <input
                type="text"
                onChange={onChangeInput}
                name="name"
                value={user.name}
            />

            <button onClick={addUser}>add user</button>
        </div>
    );
};

export default MainPage;