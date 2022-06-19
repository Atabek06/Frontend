import {types} from "../types";

export const createNumAction = (user) => {
    return {
        type: types.CREATE_NUM,
        payload: user
    }
}

export const addNumAction = (name) => {
    return {
        type: types.ADD_NUM,
        payload: name
    }
}