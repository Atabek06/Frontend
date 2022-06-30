import {types} from "./types";

const initialState = {
    status: false,
    text: "",
    button: ""
}

export const messageReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.MESSAGE_TRUE:
            return {...state,
                status: true,
                text: action.payload.text,
                button: action.payload.button}
        case types.MESSAGE_FALSE:
            return {...state, status: false}
        default:
            return state
    }
}