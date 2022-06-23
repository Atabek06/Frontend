import {types} from "../../types";

const initialState = {
    title: "hello world"
}

export const titleReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_TITLE:
            return {...state, title: "I am new title"}
        case types.CLEAR_TEXT:
            return {...state, title: ""}
        default:
            return state
    }
}