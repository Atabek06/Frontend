import {types} from "../../types";

export const changeTitleAction = () => {
    return{
        type: types.CHANGE_TITLE
    }
}

export const changeInput = (data) => {
    return{
        type: types.CHANGE_DATA,
        payload: data
    }
}

export const addUserAction = (user) => {
    return{
        type: types.ADD_USER,
        payload: user
    }
}

export const clearDataAction = (user) => {
    return{
        type: types.CLEAR_DATA,
        payload: user
    }
}



