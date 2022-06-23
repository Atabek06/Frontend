import {types} from "../../types";

export const changeTextAction = () => {
    return {
        type: types.CHANGE_TEXT,
    }
}

export const clearTextAction = () => {
    return {
        type: types.CLEAR_TEXT,
    }
}

export const showAndHideText = () => {
    return function (dispatch) {
        dispatch(changeTextAction());
        setTimeout(() => {
            dispatch(clearTextAction());
        }, 3000)
    }
}

export const handleUsersAction = (users) => {
    return{
        type: types.HANDLE_USERS,
        payload: users
    }

}

export const getUsersAction = () => {
    return async function(dispatch) {
        const options = {
            method: "POST",
            headers:{
                "Content-Type": "application-json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options)
        const data = await response.json();
        dispatch(handleUsersAction(data))

    }
}