import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createNumAction, addNumAction} from "../../actions/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const num = useSelector(state => state.num.num)
    const number = useSelector(state => state.num.number)

    const createNum = () => {
        dispatch(createNumAction(number))
    }
    const changeInput = (e) => {
        dispatch(addNumAction(e.target.value))
    }

    return (
        <div>
            <div>
                <input onChange={changeInput} value={number} type="number"/>
                <button onClick={createNum}>добавить число</button>
            </div>

            <ul>
                {num.map((user, key)=> <li key={key}>{user}</li>)}
            </ul>
        </div>


    );
};

export default MainPage;